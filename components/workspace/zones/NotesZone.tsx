"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus,
  Search,
  Filter,
  Star,
  Tag,
  Clock,
  FileText,
  Brain,
  Link,
  MoreVertical,
  Trash2,
  Edit3,
  Pin,
  Archive,
  Hash,
  TrendingUp
} from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  isPinned: boolean
  isStarred: boolean
  relatedNotes: string[]
  source?: 'chat' | 'youtube' | 'image' | 'manual'
}

export default function NotesZone() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'AI 프로듀서 가이드',
      content: '비개발자도 AI와 효과적으로 협업할 수 있는 방법론...',
      tags: ['AI', '프로듀서', '가이드'],
      createdAt: new Date('2025-05-30T10:00:00'),
      updatedAt: new Date('2025-05-30T10:30:00'),
      isPinned: true,
      isStarred: true,
      relatedNotes: ['2'],
      source: 'chat'
    },
    {
      id: '2',
      title: 'shadcn/ui 분석 결과',
      content: 'shadcn/ui의 2025년 최신 트렌드와 Variables & Animations...',
      tags: ['UI', 'React', 'Design'],
      createdAt: new Date('2025-05-30T09:30:00'),
      updatedAt: new Date('2025-05-30T10:15:00'),
      isPinned: false,
      isStarred: false,
      relatedNotes: ['1'],
      source: 'youtube'
    },
    {
      id: '3',
      title: '프로젝트 아이디어',
      content: 'Leonardo da Vinci 2075 플랫폼 개발 계획...',
      tags: ['프로젝트', '개발', 'Leonardo'],
      createdAt: new Date('2025-05-30T08:45:00'),
      updatedAt: new Date('2025-05-30T10:20:00'),
      isPinned: false,
      isStarred: true,
      relatedNotes: [],
      source: 'manual'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'updated' | 'created' | 'title'>('updated')
  const [selectedNote, setSelectedNote] = useState<string | null>('1')

  // 모든 태그 추출
  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)))

  // 필터링된 노트
  const filteredNotes = notes
    .filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => note.tags.includes(tag))
      return matchesSearch && matchesTags
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'updated':
          return b.updatedAt.getTime() - a.updatedAt.getTime()
        case 'created':
          return b.createdAt.getTime() - a.createdAt.getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  // 핀 고정된 노트를 먼저 보여주기
  const sortedNotes = [
    ...filteredNotes.filter(note => note.isPinned),
    ...filteredNotes.filter(note => !note.isPinned)
  ]

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Search & Filter Header */}
      <div className="p-4 border-b space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="노트 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-leonardo-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-1">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-leonardo-500 text-white'
                  : 'bg-leonardo-100 text-leonardo-700 hover:bg-leonardo-200'
              }`}
            >
              <Hash className="h-3 w-3 inline mr-1" />
              {tag}
            </button>
          ))}
        </div>

        {/* Sort & Actions */}
        <div className="flex items-center justify-between">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-background border rounded px-2 py-1"
          >
            <option value="updated">최근 수정순</option>
            <option value="created">생성일순</option>
            <option value="title">제목순</option>
          </select>

          <button className="p-1 hover:bg-leonardo-100 rounded transition-colors">
            <Plus className="h-4 w-4 text-leonardo-600" />
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence>
          {sortedNotes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-3 border-b cursor-pointer transition-colors ${
                selectedNote === note.id 
                  ? 'bg-leonardo-50 border-l-4 border-l-leonardo-500' 
                  : 'hover:bg-leonardo-25'
              }`}
              onClick={() => setSelectedNote(note.id)}
            >
              {/* Note Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {note.isPinned && <Pin className="h-3 w-3 text-leonardo-500 flex-shrink-0" />}
                  {note.isStarred && <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />}
                  <h3 className="font-medium text-sm truncate">{note.title}</h3>
                </div>
                <button className="p-1 hover:bg-leonardo-100 rounded">
                  <MoreVertical className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>

              {/* Note Content Preview */}
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {note.content}
              </p>

              {/* Note Meta */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  {/* Source Icon */}
                  {note.source === 'chat' && <Brain className="h-3 w-3 text-blue-500" />}
                  {note.source === 'youtube' && <FileText className="h-3 w-3 text-red-500" />}
                  {note.source === 'manual' && <Edit3 className="h-3 w-3 text-green-500" />}
                  
                  <span className="text-muted-foreground">
                    {note.updatedAt.toLocaleDateString()}
                  </span>
                </div>

                {/* Related Notes Indicator */}
                {note.relatedNotes.length > 0 && (
                  <div className="flex items-center gap-1 text-leonardo-600">
                    <Link className="h-3 w-3" />
                    <span>{note.relatedNotes.length}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {note.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {note.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 text-xs bg-leonardo-100 text-leonardo-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {note.tags.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{note.tags.length - 3}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty State */}
        {sortedNotes.length === 0 && (
          <div className="h-full flex items-center justify-center p-8">
            <div className="text-center">
              <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                {searchTerm || selectedTags.length > 0 ? '검색 결과가 없습니다' : '아직 노트가 없습니다'}
              </p>
              <p className="text-xs text-muted-foreground">
                Chat에서 대화하면 자동으로 노트가 생성됩니다
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Note Detail Panel (선택된 노트가 있을 때) */}
      {selectedNote && (
        <div className="border-t bg-card/50 p-4 max-h-48 overflow-y-auto">
          {(() => {
            const note = notes.find(n => n.id === selectedNote)
            if (!note) return null

            return (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-sm">{note.title}</h4>
                  <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-leonardo-100 rounded">
                      <Edit3 className="h-3 w-3" />
                    </button>
                    <button className="p-1 hover:bg-leonardo-100 rounded">
                      <Star className={`h-3 w-3 ${note.isStarred ? 'text-yellow-500' : 'text-muted-foreground'}`} />
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3 whitespace-pre-wrap">
                  {note.content}
                </p>

                {/* Related Notes */}
                {note.relatedNotes.length > 0 && (
                  <div>
                    <h5 className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                      <Link className="h-3 w-3" />
                      연관 노트
                    </h5>
                    <div className="space-y-1">
                      {note.relatedNotes.map(relatedId => {
                        const relatedNote = notes.find(n => n.id === relatedId)
                        return relatedNote ? (
                          <button
                            key={relatedId}
                            onClick={() => setSelectedNote(relatedId)}
                            className="block w-full text-left text-xs bg-leonardo-50 hover:bg-leonardo-100 rounded px-2 py-1 transition-colors"
                          >
                            {relatedNote.title}
                          </button>
                        ) : null
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })()}
        </div>
      )}

      {/* Statistics Footer */}
      <div className="border-t p-2 bg-card/25">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{notes.length}개 노트</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-3 w-3" />
            <span>활성 메모리</span>
          </div>
        </div>
      </div>
    </div>
  )
}