# 05. 구현 체크리스트

## Phase 1: 프로젝트 설정

### 환경 구축
- [ ] Next.js 프로젝트 생성 (App Router)
- [ ] TypeScript 설정
- [ ] Tailwind CSS 설정
- [ ] ESLint + Prettier 설정
- [ ] Git 저장소 초기화

### 디자인 시스템
- [ ] Tailwind config 커스터마이징 (색상, 폰트, 스페이싱)
- [ ] Pretendard 폰트 설치 및 설정
- [ ] 글로벌 CSS 작성 (globals.css)
- [ ] CSS 변수 정의

### 라이브러리 설치
- [ ] framer-motion
- [ ] react-intersection-observer
- [ ] react-countup
- [ ] @headlessui/react
- [ ] lucide-react

---

## Phase 2: 공통 컴포넌트

### Layout
- [ ] Header 컴포넌트
  - [ ] 로고
  - [ ] 네비게이션 링크
  - [ ] CTA 버튼
  - [ ] 모바일 햄버거 메뉴
  - [ ] 스크롤 시 스타일 변경

- [ ] Footer 컴포넌트
  - [ ] 로고 + 슬로건
  - [ ] 링크 그룹
  - [ ] 연락처
  - [ ] 소셜 링크
  - [ ] 법적 고지

### UI 컴포넌트
- [ ] Button 컴포넌트
  - [ ] Primary 스타일
  - [ ] Secondary 스타일
  - [ ] Ghost 스타일
  - [ ] 크기 variants (sm, md, lg)
  - [ ] 링크 지원 (href)
  - [ ] 로딩 상태

- [ ] Card 컴포넌트
  - [ ] Default 스타일
  - [ ] Featured 스타일 (강조)
  - [ ] Hover 애니메이션

- [ ] Badge 컴포넌트
  - [ ] 색상 variants
  - [ ] 크기 variants

- [ ] Accordion 컴포넌트
  - [ ] 펼침/접힘 애니메이션
  - [ ] 접근성 (키보드 네비게이션)

- [ ] AnimatedSection 컴포넌트
  - [ ] Fade in up
  - [ ] Slide in left/right
  - [ ] Stagger children

- [ ] CountUp 컴포넌트
  - [ ] 숫자 애니메이션
  - [ ] Suffix/Prefix 지원
  - [ ] Intersection Observer 트리거

- [ ] DeviceMockup 컴포넌트
  - [ ] iPhone 프레임
  - [ ] MacBook 프레임
  - [ ] 반응형

---

## Phase 3: 섹션 구현

### Hero Section
- [ ] 메인 카피 타이포그래피
- [ ] 서브 카피
- [ ] CTA 버튼 2개
- [ ] 신뢰 배지
- [ ] 제품 스크린샷/영상
- [ ] 배경 그라데이션
- [ ] 모바일 반응형

### Pain Point Section
- [ ] 섹션 타이틀
- [ ] 3개 Pain Point 카드
- [ ] 아이콘 및 일러스트
- [ ] 스크롤 애니메이션
- [ ] 모바일 반응형

### Solution Section
- [ ] 섹션 타이틀
- [ ] 3단계 프로세스 시각화
- [ ] 단계별 아이콘
- [ ] 연결 라인/화살표
- [ ] 각 단계 설명
- [ ] 스크롤 애니메이션
- [ ] 모바일 반응형

### Features Section
- [ ] 섹션 타이틀
- [ ] 4개 Feature 카드
- [ ] 각 카드별 스크린샷
- [ ] DeviceMockup 적용
- [ ] 호버 효과
- [ ] 스크롤 애니메이션 (stagger)
- [ ] 모바일 반응형

### Social Proof Section
- [ ] 섹션 타이틀
- [ ] 4개 통계 카운터
- [ ] CountUp 애니메이션
- [ ] 3개 고객 후기 카드
- [ ] 프로필 이미지 (옵션)
- [ ] 스크롤 애니메이션
- [ ] 모바일 반응형

### Pricing Section
- [ ] 섹션 타이틀
- [ ] 무료 체험 강조 배너
- [ ] 3개 요금제 카드
- [ ] 인기 배지 (Pro)
- [ ] 기능 목록
- [ ] CTA 버튼
- [ ] 모바일 반응형

### FAQ Section
- [ ] 섹션 타이틀
- [ ] 6개 FAQ 아코디언
- [ ] 펼침/접힘 애니메이션
- [ ] 스크롤 애니메이션
- [ ] 모바일 반응형

### Final CTA Section
- [ ] 배경 그라데이션
- [ ] 타이틀 + 서브타이틀
- [ ] 큰 CTA 버튼
- [ ] 보조 텍스트 (체크 리스트)
- [ ] 모바일 반응형

---

## Phase 4: 인터랙션 & 애니메이션

### 스크롤 애니메이션
- [ ] 각 섹션 진입 시 fade in up
- [ ] 카드 stagger 애니메이션
- [ ] 통계 숫자 카운트업
- [ ] 부드러운 스크롤

### 호버 효과
- [ ] 버튼 hover scale + shadow
- [ ] 카드 hover lift + shadow
- [ ] 링크 hover underline

### 기타 인터랙션
- [ ] Header 스크롤 시 배경색 변경
- [ ] 모바일 메뉴 slide in
- [ ] FAQ 아코디언 애니메이션
- [ ] 데모 영상 플레이어 컨트롤

---

## Phase 5: 폼 & 전환

### 무료 체험 신청 폼
- [ ] 폼 UI 구현
  - [ ] 학원명
  - [ ] 대표자명
  - [ ] 전화번호
  - [ ] 이메일
  - [ ] 학생 수
  - [ ] 약관 동의
- [ ] 폼 유효성 검증
- [ ] 제출 로딩 상태
- [ ] 성공/실패 피드백
- [ ] 백엔드 연동 (API Route)

### 문의 폼 (선택)
- [ ] 문의 유형 선택
- [ ] 연락처 입력
- [ ] 문의 내용
- [ ] 제출 처리

---

## Phase 6: SEO & 메타데이터

### 메타 태그
- [ ] title
- [ ] description
- [ ] keywords
- [ ] Open Graph 태그
- [ ] Twitter Card 태그
- [ ] favicon

### Structured Data
- [ ] JSON-LD (SoftwareApplication)
- [ ] 구글 검색 테스트

### 기타 SEO
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] canonical URL
- [ ] 이미지 alt 텍스트

---

## Phase 7: 분석 & 추적

### Google Analytics 4
- [ ] GA4 설치
- [ ] 페이지뷰 추적
- [ ] 스크롤 깊이 추적
- [ ] CTA 클릭 이벤트
- [ ] 폼 제출 전환 설정

### 기타 추적
- [ ] 데모 영상 재생 추적
- [ ] FAQ 펼침 추적
- [ ] 외부 링크 클릭 추적

---

## Phase 8: 성능 최적화

### 이미지
- [ ] Next.js Image 컴포넌트 적용
- [ ] WebP 포맷 사용
- [ ] 적절한 sizes 속성
- [ ] lazy loading
- [ ] blur placeholder

### 폰트
- [ ] next/font 사용
- [ ] font-display: swap
- [ ] 필요한 weight만 로드

### 코드
- [ ] 동적 임포트 (비디오 플레이어 등)
- [ ] 불필요한 JS 제거
- [ ] Tree shaking 확인

### 측정
- [ ] Lighthouse 점수 90+ 달성
- [ ] Core Web Vitals 통과
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

---

## Phase 9: 접근성

### 기본 접근성
- [ ] 시맨틱 HTML 사용
- [ ] heading 계층 구조
- [ ] 링크/버튼 구분
- [ ] 이미지 alt 텍스트

### 키보드 네비게이션
- [ ] 모든 인터랙티브 요소 접근 가능
- [ ] focus 스타일 명확
- [ ] skip to content 링크
- [ ] 모달 focus trap

### 스크린 리더
- [ ] aria-label 적용
- [ ] aria-expanded (아코디언)
- [ ] role 속성

### 색상 대비
- [ ] WCAG AA 기준 충족
- [ ] 색상만으로 정보 전달하지 않음

---

## Phase 10: 테스트 & 배포

### 테스트
- [ ] 크로스 브라우저 테스트
  - [ ] Chrome
  - [ ] Safari
  - [ ] Firefox
  - [ ] Edge
- [ ] 반응형 테스트
  - [ ] 모바일 (375px, 390px)
  - [ ] 태블릿 (768px, 1024px)
  - [ ] 데스크톱 (1280px, 1440px+)
- [ ] 폼 제출 테스트
- [ ] 링크 동작 확인
- [ ] 404 페이지

### 배포 준비
- [ ] 환경 변수 설정
- [ ] Vercel 프로젝트 생성
- [ ] 도메인 연결
- [ ] SSL 인증서 확인
- [ ] 리다이렉트 설정 (www → non-www)

### 런칭
- [ ] 프로덕션 배포
- [ ] GA4 데이터 수집 확인
- [ ] Search Console 등록
- [ ] 최종 QA

---

## 에셋 체크리스트

### 이미지
- [ ] OG 이미지 (1200x630)
- [ ] Favicon (16x16, 32x32, 180x180)
- [ ] 제품 스크린샷 4장
  - [ ] 대시보드
  - [ ] 시험지 업로드
  - [ ] 약점 분석
  - [ ] 학부모 리포트
- [ ] 디바이스 목업 프레임

### 영상
- [ ] 데모 영상 (30초~1분)
- [ ] 영상 포스터 이미지

### 아이콘
- [ ] 로고 SVG
- [ ] 기능 아이콘 세트

### 폰트
- [ ] Pretendard woff2 파일
  - [ ] Regular (400)
  - [ ] Medium (500)
  - [ ] SemiBold (600)
  - [ ] Bold (700)
