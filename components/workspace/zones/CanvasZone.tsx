"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize, 
  Image as ImageIcon,
  Code,
  Globe,
  Layers,
  Palette,
  Zap,
  Eye,
  Settings,
  Youtube,
  Monitor
} from 'lucide-react'

type CanvasContent = 
  | 'welcome'
  | 'youtube'
  | 'image'
  | 'website'
  | 'node-editor'
  | 'code-preview'

export default function CanvasZone() {
  const [contentType, setContentType] = useState<CanvasContent>('welcome')
  const [isPlaying, setIsPlaying] = useState(false)

  const renderContent = () => {
    switch (contentType) {
      case 'youtube':
        return <YouTubePlayer />
      case 'image':
        return <ImageViewer />
      case 'website':
        return <WebsiteBuilder />
      case 'node-editor':
        return <NodeEditor />
      case 'code-preview':
        return <CodePreview />
      default:
        return <WelcomeCanvas />
    }
  }

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-leonardo-50/30 to-background">
      {/* Canvas Toolbar */}
      <div className="flex items-center justify-between p-3 border-b bg-card/50">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setContentType('welcome')}
            className={`p-2 rounded-lg transition-colors ${
              contentType === 'welcome' ? 'bg-leonardo-500 text-white' : 'hover:bg-leonardo-100'
            }`}
            title="Welcome Canvas"
          >
            <Palette className="h-4 w-4" />
          </button>
          <button
            onClick={() => setContentType('youtube')}
            className={`p-2 rounded-lg transition-colors ${
              contentType === 'youtube' ? 'bg-leonardo-500 text-white' : 'hover:bg-leonardo-100'
            }`}
            title="YouTube Player"
          >
            <Youtube className="h-4 w-4" />
          </button>
          <button
            onClick={() => setContentType('image')}
            className={`p-2 rounded-lg transition-colors ${
              contentType === 'image' ? 'bg-leonardo-500 text-white' : 'hover:bg-leonardo-100'
            }`}
            title="Image Viewer"
          >
            <ImageIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setContentType('website')}
            className={`p-2 rounded-lg transition-colors ${
              contentType === 'website' ? 'bg-leonardo-500 text-white' : 'hover:bg-leonardo-100'
            }`}
            title="Website Builder"
          >
            <Globe className="h-4 w-4" />
          </button>
          <button
            onClick={() => setContentType('node-editor')}
            className={`p-2 rounded-lg transition-colors ${
              contentType === 'node-editor' ? 'bg-leonardo-500 text-white' : 'hover:bg-leonardo-100'
            }`}
            title="Node Editor"
          >
            <Layers className="h-4 w-4" />
          </button>
          <button
            onClick={() => setContentType('code-preview')}
            className={`p-2 rounded-lg transition-colors ${
              contentType === 'code-preview' ? 'bg-leonardo-500 text-white' : 'hover:bg-leonardo-100'
            }`}
            title="Code Preview"
          >
            <Code className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-leonardo-100 rounded-lg transition-colors">
            <Maximize className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-leonardo-100 rounded-lg transition-colors">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Canvas Content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={contentType}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// Welcome Canvas Component
function WelcomeCanvas() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-24 h-24 bg-gradient-to-br from-leonardo-400 to-leonardo-600 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <Palette className="h-12 w-12 text-white" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-leonardo-800 mb-4">
          Leonardo Canvas
        </h2>
        <p className="text-muted-foreground mb-6">
          이곳에서 YouTube 영상을 시청하고, 이미지를 분석하고, 웹사이트를 실시간으로 빌드할 수 있습니다.
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 bg-card rounded-lg border">
            <Youtube className="h-6 w-6 text-leonardo-500 mb-2" />
            <p className="font-medium">YouTube 분석</p>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <ImageIcon className="h-6 w-6 text-leonardo-500 mb-2" />
            <p className="font-medium">이미지 뷰어</p>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <Globe className="h-6 w-6 text-leonardo-500 mb-2" />
            <p className="font-medium">웹사이트 빌더</p>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <Layers className="h-6 w-6 text-leonardo-500 mb-2" />
            <p className="font-medium">n8n 에디터</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// YouTube Player Component
function YouTubePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  return (
    <div className="h-full flex flex-col bg-black/5">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl aspect-video bg-black rounded-lg relative overflow-hidden">
          {/* 실제 YouTube iframe이 여기에 들어갈 예정 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Youtube className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">YouTube URL을 Chat에 입력하면</p>
              <p className="text-lg">여기에서 시청할 수 있습니다</p>
            </div>
          </div>
          
          {/* 플레이어 컨트롤 */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-4 text-white">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <div className="flex-1 h-1 bg-white/30 rounded-full">
                <div className="w-1/3 h-full bg-leonardo-500 rounded-full"></div>
              </div>
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Image Viewer Component
function ImageViewer() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-32 h-32 bg-leonardo-100 rounded-xl mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-leonardo-300">
          <ImageIcon className="h-16 w-16 text-leonardo-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2">이미지 뷰어</h3>
        <p className="text-muted-foreground mb-4">
          이미지를 Chat에 업로드하면<br />여기에서 확인하고 분석할 수 있습니다
        </p>
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• OCR 텍스트 추출</p>
          <p>• AI 이미지 분석</p>
          <p>• 메타데이터 확인</p>
        </div>
      </div>
    </div>
  )
}

// Website Builder Component
function WebsiteBuilder() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-10 bg-card border-b flex items-center px-4 gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 bg-background rounded px-3 py-1 text-xs text-muted-foreground">
          https://preview.leonardo-ai.local
        </div>
      </div>
      
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="text-center text-gray-500">
          <Monitor className="h-16 w-16 mx-auto mb-4" />
          <p className="text-lg font-medium">웹사이트 빌더</p>
          <p className="text-sm">실시간으로 웹사이트를 빌드하고 미리보기</p>
        </div>
      </div>
    </div>
  )
}

// Node Editor Component (n8n 스타일)
function NodeEditor() {
  return (
    <div className="h-full bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <Layers className="h-16 w-16 mx-auto mb-4 text-leonardo-400" />
          <p className="text-lg font-medium">Node Editor</p>
          <p className="text-sm text-gray-400">n8n 스타일의 워크플로우 에디터</p>
        </div>
      </div>
    </div>
  )
}

// Code Preview Component
function CodePreview() {
  return (
    <div className="h-full bg-gray-950 text-green-400 font-mono text-sm p-4 overflow-auto">
      <div className="mb-4 text-leonardo-400">
        <Code className="h-4 w-4 inline mr-2" />
        Code Preview
      </div>
      
      <div className="space-y-2">
        <div className="text-gray-500">// Generated by Leonardo AI</div>
        <div><span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> <span className="text-orange-400">'react'</span></div>
        <div></div>
        <div><span className="text-blue-400">export default function</span> <span className="text-yellow-400">Component</span>() {`{`}</div>
        <div className="ml-4"><span className="text-blue-400">return</span> (</div>
        <div className="ml-8">&lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"container"</span>&gt;</div>
        <div className="ml-12">&lt;<span className="text-red-400">h1</span>&gt;Hello Leonardo!&lt;/<span className="text-red-400">h1</span>&gt;</div>
        <div className="ml-8">&lt;/<span className="text-red-400">div</span>&gt;</div>
        <div className="ml-4">)</div>
        <div>{`}`}</div>
      </div>
    </div>
  )
}