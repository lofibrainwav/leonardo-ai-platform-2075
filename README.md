# 🎨 Leonardo da Vinci 2075 - AI 협업 플랫폼

> **차세대 AI 협업 플랫폼** - 프로듀서 중심 설계로 누구나 AI와 완벽하게 협업할 수 있는 미래의 작업공간

[![GitHub Stars](https://img.shields.io/github/stars/lofibrainwav/leonardo-ai-platform-2075?style=for-the-badge&logo=github)](https://github.com/lofibrainwav/leonardo-ai-platform-2075)
[![Leonardo Style](https://img.shields.io/badge/Style-Leonardo_da_Vinci_2075-gold?style=for-the-badge&logo=palette)](https://github.com/lofibrainwav/leonardo-ai-platform-2075)

## 🎯 **비전 (Vision)**

**"AI와 인간이 진정으로 협업하는 미래의 작업공간"**

Leonardo da Vinci가 2075년에 만들었을 법한 창작 스튜디오 - 예술가의 창의력과 과학자의 정확성, 발명가의 혁신성이 AI와 완벽하게 조화를 이루는 플랫폼

## ✨ **핵심 혁신 (Core Innovations)**

### 🎪 **1. 프로듀서 중심 설계**
- 🎬 **비개발자도 AI 오케스트라의 지휘자가 될 수 있음**
- 📝 **지능형 템플릿 시스템**: 명확하지 않은 요구사항을 구조화된 질문으로 변환
- 🔄 **A/B 선택지 제시**: 복잡한 결정을 간단한 선택으로 변환
- 📊 **지속적 피드백 루프**: AI가 사용자의 의도를 점진적으로 학습

### 🖼️ **2. 3분할 협업 인터페이스**
```
┌─────────────┬─────────────────┬─────────────┐
│    Chat     │     Canvas      │    Notes    │
│   Zone      │     Zone        │    Zone     │
├─────────────┼─────────────────┼─────────────┤
│ • 대화창     │ • YouTube 플레이어│ • 실시간 노트│
│ • 파일 업로드 │ • 이미지 뷰어     │ • 계층적 정보│
│ • MCP 도구   │ • n8n 노드 에디터 │ • 연관 추천  │
│ • 템플릿    │ • 웹사이트 빌더   │ • 검색/필터  │
└─────────────┴─────────────────┴─────────────┘
```

### 🧠 **3. 멀티미디어 통합 분석**
- 📸 **OCR**: 스크린샷 → 텍스트 추출
- 🎵 **음성 분석**: MP3 → 코드/가사/내용 분석
- 🎥 **YouTube 분석**: 자동 요약 + 질문지 생성 (NotebookGPT 스타일)
- 🖼️ **이미지 분석**: Vision AI로 모든 시각적 정보 이해

### 🗄️ **4. 3차원 RAG 메모리 시스템**
```
3D Vector Space:
┌─ 시간축 (When) ─ 언제 생성/수정
├─ 주제축 (What) ─ 카테고리/태그
└─ 연관축 (How)  ─ 관계 강도
```
- 🔍 **자연어 검색**: "저번 주 유튜브 마케팅 영상 내용"
- 🧩 **지능형 연결**: 관련 정보 자동 추천
- 📚 **컨텍스트 누적**: 대화할수록 더 정확해지는 AI

### 🛠️ **5. 확장 가능한 MCP 생태계**
- 14개 기본 MCP 도구 + 무한 확장
- 팝업으로 도구 설명 및 사용법 제시
- 커스텀 MCP 도구 제작 페이지

## 🏗️ **시스템 아키텍처**

### 📱 **Frontend (Next.js 14)**
```typescript
// 3분할 레이아웃 구조
interface LayoutStructure {
  leftPanel: ChatZone      // 대화 + 파일 + 도구
  centerPanel: CanvasZone  // 동적 콘텐츠 영역
  rightPanel: NotesZone    // 노트 + 메모리
}
```

### 🔧 **Backend (FastAPI + PostgreSQL)**
```python
# RAG 메모리 시스템
class MemorySystem:
    def store_3d_vector(content, timestamp, category, relations)
    def search_natural_language(query)
    def get_contextual_recommendations(current_context)
```

### 🤖 **AI Services Integration**
- **Claude API**: 메인 대화 엔진
- **Whisper API**: 음성 → 텍스트
- **Vision API**: 이미지 분석
- **Embedding API**: 벡터 검색

## 🚀 **개발 로드맵**

### 🎯 **Phase 1: MVP (4주)**
- [x] GitHub 레포지토리 생성
- [ ] 3분할 기본 레이아웃 구현
- [ ] Claude API 연동
- [ ] 파일 업로드 (이미지, 텍스트, 음성)
- [ ] 기본 OCR 기능
- [ ] 간단한 노트 시스템

### ⚡ **Phase 2: 핵심 기능 (6주)**
- [ ] YouTube 분석 시스템
- [ ] 음성 인식 (Whisper)
- [ ] 프로듀서 템플릿 시스템
- [ ] MCP 도구 통합
- [ ] 기본 RAG 검색

### 🎨 **Phase 3: 고급 기능 (8주)**
- [ ] n8n 노드 에디터 통합
- [ ] 실시간 웹사이트 빌더
- [ ] 3D 벡터 메모리 시스템
- [ ] 고급 컨텍스트 관리
- [ ] 협업 기능

### 🌟 **Phase 4: 생태계 완성 (12주)**
- [ ] 가족 페이지 구현
- [ ] MCP 도구 제작 페이지
- [ ] 고급 프로듀서 템플릿
- [ ] 커뮤니티 기능
- [ ] API 공개

## 💡 **프로듀서 템플릿 시스템**

### 🎬 **템플릿 구조**
```yaml
project_detection:
  type: "ecommerce" | "app" | "website" | "content"
  
auto_questions:
  - target_audience: "누구를 위한 서비스인가요?"
  - core_value: "사용자에게 주는 핵심 가치는?"
  - differentiation: "기존 서비스와 다른 점은?"
  
choice_system:
  style: ["모던", "클래식"] 
  features: ["필수 기능", "고급 기능"]
  priority: ["속도 우선", "기능 우선"]
```

### 🔄 **피드백 루프**
1. **질문 → 답변 → 선택지 제시**
2. **진행상황 시각화**
3. **단계별 승인 시스템**
4. **자동 문서화**

## 🎯 **사용 시나리오**

### 📱 **앱 개발 프로듀서**
```
1. "모바일 앱 만들고 싶어" 입력
2. AI가 템플릿 질문 자동 생성
3. 사용자 답변 → A/B 선택지 제시
4. Canvas에서 UI 프로토타입 실시간 생성
5. Notes에 요구사항 자동 정리
6. MCP 도구로 실제 개발 진행
```

### 🎥 **콘텐츠 분석 워크플로우**
```
1. YouTube URL 입력
2. Canvas에서 영상 시청
3. 실시간 요약이 Notes에 축적
4. AI가 관련 질문지 생성
5. 대화하며 인사이트 도출
6. 모든 내용이 3D 메모리에 저장
```

## 🛠️ **기술 스택**

### 🎨 **Frontend**
- **Next.js 14** + TypeScript
- **Tailwind CSS** + Framer Motion
- **Zustand** (상태 관리)
- **React Query** (서버 상태)

### 🔧 **Backend**
- **FastAPI** + Python
- **PostgreSQL** + pgvector
- **Redis** (캐싱)
- **WebSockets** (실시간)

### 🤖 **AI & Storage**
- **Claude API** (메인 AI)
- **OpenAI Whisper** (음성)
- **OpenAI Vision** (이미지)
- **AWS S3** (파일 저장)

## 🎪 **특별 기능들**

### 🎨 **Leonardo da Vinci 모드**
```
"창의적이고 혁신적인 아이디어를 제시해주세요"
→ AI가 르네상스 마스터의 사고방식으로 응답
```

### 🔍 **척하면 척 검색**
```
자연어: "저번에 본 그 마케팅 유튜브 영상"
→ 3D 벡터 검색으로 정확한 영상 찾기
```

### 🎯 **Context-Aware 추천**
```
현재 작업 중인 프로젝트와 관련된 
정보/도구/템플릿을 자동으로 추천
```

## 📊 **성공 지표**

- 🎯 **프로듀서 만족도**: 비개발자도 쉽게 사용
- ⚡ **생산성 향상**: 기존 도구 대비 3x 빠른 작업
- 🧠 **학습 효과**: 사용할수록 더 정확한 AI
- 🔗 **정보 연결**: 관련 정보 자동 발견율

## 🌟 **차별화 포인트**

### vs. Claude
- ✅ 멀티미디어 통합 분석
- ✅ 3분할 협업 인터페이스
- ✅ 프로듀서 중심 설계

### vs. ChatGPT
- ✅ 지속적 메모리 시스템
- ✅ 실시간 협업 캔버스
- ✅ MCP 도구 생태계

### vs. Notion
- ✅ AI 네이티브 설계
- ✅ 자동 콘텐츠 생성
- ✅ 지능형 정보 연결

## 🎉 **Getting Started**

### 🚀 **개발 환경 설정**
```bash
# 클론
git clone https://github.com/lofibrainwav/leonardo-ai-platform-2075.git
cd leonardo-ai-platform-2075

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# API 키들 설정...

# 개발 서버 시작
npm run dev
```

### 🎯 **첫 번째 프로젝트 만들기**
1. 플랫폼 접속
2. "새 프로젝트" 클릭
3. 프로듀서 템플릿 따라하기
4. AI와 협업하며 아이디어 실현!

---

<div align="center">

**🎨 "상상할 수 있다면, 실현할 수 있다"**  
*- Leonardo da Vinci, 2075*

**Built with ❤️ by AI Power Developer System**

*차세대 AI 협업의 새로운 표준*

</div>