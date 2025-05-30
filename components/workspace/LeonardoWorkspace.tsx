"use client"

import React, { useState } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Canvas, 
  FileText, 
  Settings, 
  Sparkles,
  Palette,
  Brain,
  Zap
} from 'lucide-react'

import ChatZone from './zones/ChatZone'
import CanvasZone from './zones/CanvasZone'
import NotesZone from './zones/NotesZone'
import TopNavigation from './navigation/TopNavigation'

export default function LeonardoWorkspace() {
  const [activeZone, setActiveZone] = useState<'chat' | 'canvas' | 'notes'>('chat')

  return (
    <div className="h-screen bg-gradient-to-br from-background via-background to-leonardo-50/10 flex flex-col">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Workspace - 3분할 레이아웃 */}
      <div className="flex-1 p-2 gap-2">
        <PanelGroup direction="horizontal" className="h-full">
          {/* Left Panel - Chat Zone */}
          <Panel 
            defaultSize={25} 
            minSize={20}
            maxSize={40}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <div className="h-full bg-card/80 backdrop-blur border rounded-lg shadow-lg overflow-hidden">
                {/* Zone Header */}
                <div className="flex items-center gap-2 p-3 border-b bg-gradient-to-r from-leonardo-500/10 to-leonardo-600/10">
                  <MessageSquare className="h-5 w-5 text-leonardo-600" />
                  <h2 className="font-semibold text-leonardo-800">Chat Zone</h2>
                  <div className="ml-auto">
                    <Sparkles className="h-4 w-4 text-leonardo-500 animate-leonardo-glow" />
                  </div>
                </div>
                
                {/* Chat Content */}
                <div className="h-[calc(100%-60px)]">
                  <ChatZone />
                </div>
              </div>
            </motion.div>
          </Panel>

          <PanelResizeHandle className="w-2 bg-border/50 hover:bg-leonardo-200/50 transition-colors" />

          {/* Center Panel - Canvas Zone */}
          <Panel 
            defaultSize={50} 
            minSize={30}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-card/80 backdrop-blur border rounded-lg shadow-lg overflow-hidden">
                {/* Zone Header */}
                <div className="flex items-center gap-2 p-3 border-b bg-gradient-to-r from-leonardo-500/10 to-leonardo-600/10">
                  <Canvas className="h-5 w-5 text-leonardo-600" />
                  <h2 className="font-semibold text-leonardo-800">Canvas Zone</h2>
                  <div className="ml-auto flex items-center gap-2">
                    <Palette className="h-4 w-4 text-leonardo-500" />
                    <Brain className="h-4 w-4 text-leonardo-500" />
                  </div>
                </div>
                
                {/* Canvas Content */}
                <div className="h-[calc(100%-60px)]">
                  <CanvasZone />
                </div>
              </div>
            </motion.div>
          </Panel>

          <PanelResizeHandle className="w-2 bg-border/50 hover:bg-leonardo-200/50 transition-colors" />

          {/* Right Panel - Notes Zone */}
          <Panel 
            defaultSize={25} 
            minSize={20}
            maxSize={40}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="h-full"
            >
              <div className="h-full bg-card/80 backdrop-blur border rounded-lg shadow-lg overflow-hidden">
                {/* Zone Header */}
                <div className="flex items-center gap-2 p-3 border-b bg-gradient-to-r from-leonardo-500/10 to-leonardo-600/10">
                  <FileText className="h-5 w-5 text-leonardo-600" />
                  <h2 className="font-semibold text-leonardo-800">Notes Zone</h2>
                  <div className="ml-auto">
                    <Zap className="h-4 w-4 text-leonardo-500" />
                  </div>
                </div>
                
                {/* Notes Content */}
                <div className="h-[calc(100%-60px)]">
                  <NotesZone />
                </div>
              </div>
            </motion.div>
          </Panel>
        </PanelGroup>
      </div>

      {/* Status Bar */}
      <div className="h-8 bg-card/50 backdrop-blur border-t flex items-center justify-between px-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Leonardo AI Connected
          </span>
          <span>Memory: 47MB</span>
          <span>Context: 2.3K tokens</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Leonardo da Vinci 2075</span>
          <Sparkles className="h-3 w-3 text-leonardo-500" />
        </div>
      </div>
    </div>
  )
}