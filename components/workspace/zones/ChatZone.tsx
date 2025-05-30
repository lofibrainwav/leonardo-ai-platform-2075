"use client"

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { 
  Send, 
  Paperclip, 
  Mic, 
  Image, 
  FileText, 
  Music,
  Video,
  Settings,
  Sparkles,
  Bot,
  User,
  Loader2
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  attachments?: File[]
}

export default function ChatZone() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: '🎨 Leonardo da Vinci 2075 AI에 오신 것을 환영합니다! 저는 당신의 창의적 프로젝트를 도와드릴 준비가 되어 있습니다.',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 파일 드롭존 설정
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      handleFileUpload(acceptedFiles)
    },
    noClick: true
  })

  const handleFileUpload = async (files: File[]) => {
    if (files.length === 0) return

    // 파일 업로드 메시지 추가
    const fileMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: `📎 ${files.length}개 파일 업로드됨: ${files.map(f => f.name).join(', ')}`,
      timestamp: new Date(),
      attachments: files
    }

    setMessages(prev => [...prev, fileMessage])

    // TODO: 실제 파일 처리 로직
    // - 이미지 → Vision API
    // - 음성 → Whisper API  
    // - 텍스트 → 직접 처리
    // - 영상 → 프레임 추출
  }

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputText,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
      // TODO: Claude API 호출
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: `흥미로운 아이디어네요! "${inputText}"에 대해 더 자세히 알려주세요. 어떤 목적으로 사용하실 계획인가요? 타겟 사용자는 누구인가요?`,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('메시지 전송 오류:', error)
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div 
      {...getRootProps()} 
      className={`h-full flex flex-col relative ${
        isDragActive ? 'bg-leonardo-50/50 border-2 border-dashed border-leonardo-300' : ''
      }`}
    >
      {/* 파일 드래그 오버레이 */}
      <AnimatePresence>
        {isDragActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-leonardo-500/10 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <Paperclip className="h-12 w-12 text-leonardo-500 mx-auto mb-2" />
              <p className="text-leonardo-700 font-medium">파일을 여기에 드롭하세요</p>
              <p className="text-sm text-leonardo-600">이미지, 음성, 텍스트, 영상 모두 지원</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex gap-3 ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.type !== 'user' && (
                <div className="flex-shrink-0">
                  {message.type === 'assistant' ? (
                    <div className="w-8 h-8 bg-leonardo-500 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              )}

              <div className={`max-w-[80%] ${
                message.type === 'user' 
                  ? 'bg-leonardo-500 text-white' 
                  : message.type === 'assistant'
                  ? 'bg-card border'
                  : 'bg-muted'
              } rounded-2xl px-4 py-2`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                
                {/* 첨부파일 표시 */}
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.attachments.map((file, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-1 bg-white/20 rounded px-2 py-1 text-xs"
                      >
                        {file.type.startsWith('image/') && <Image className="h-3 w-3" />}
                        {file.type.startsWith('audio/') && <Music className="h-3 w-3" />}
                        {file.type.startsWith('video/') && <Video className="h-3 w-3" />}
                        {file.type.startsWith('text/') && <FileText className="h-3 w-3" />}
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-1 text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>

              {message.type === 'user' && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 로딩 표시 */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 bg-leonardo-500 rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-card border rounded-2xl px-4 py-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Leonardo가 생각 중입니다...
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* 입력 영역 */}
      <div className="p-4 border-t bg-card/50">
        <div className="flex items-end gap-2">
          {/* 파일 업로드 버튼 */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 hover:bg-leonardo-100 rounded-lg transition-colors"
            title="파일 첨부"
          >
            <Paperclip className="h-5 w-5 text-leonardo-600" />
          </button>

          {/* 음성 녹음 버튼 */}
          <button
            className="p-2 hover:bg-leonardo-100 rounded-lg transition-colors"
            title="음성 녹음"
          >
            <Mic className="h-5 w-5 text-leonardo-600" />
          </button>

          {/* 텍스트 입력 */}
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Leonardo에게 메시지를 보내세요... (Shift+Enter로 줄바꿈)"
              className="w-full max-h-32 px-4 py-2 bg-background border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-leonardo-500 focus:border-transparent"
              rows={1}
            />
          </div>

          {/* 전송 버튼 */}
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
            className="p-2 bg-leonardo-500 text-white rounded-lg hover:bg-leonardo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>

        {/* 숨겨진 파일 입력 */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          accept="image/*,audio/*,video/*,text/*,.pdf,.doc,.docx"
          onChange={(e) => {
            if (e.target.files) {
              handleFileUpload(Array.from(e.target.files))
            }
          }}
        />
      </div>

      {/* 드롭존 입력 */}
      <input {...getInputProps()} />
    </div>
  )
}