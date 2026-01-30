# 02. 디자인 가이드

## 디자인 원칙

### 1. 극단적 단순함
- 55세 베테랑 원장도 3초 안에 이해할 수 있는 UI
- 한 화면에 하나의 메시지
- 복잡한 기능 나열 금지

### 2. 신뢰감
- 전문적이면서도 친근한 톤
- 깔끔한 여백 활용
- 실제 제품 스크린샷 활용

### 3. 행동 유도
- CTA 버튼 명확하게 강조
- 스크롤 유도 요소
- 진행감을 느낄 수 있는 구성

---

## 컬러 시스템

### Primary Colors
```css
--primary-500: #3B82F6;    /* 메인 블루 - CTA, 강조 */
--primary-600: #2563EB;    /* 호버 상태 */
--primary-700: #1D4ED8;    /* 액티브 상태 */
--primary-50: #EFF6FF;     /* 배경 하이라이트 */
--primary-100: #DBEAFE;    /* 섹션 배경 */
```

### Secondary Colors
```css
--success-500: #22C55E;    /* 성공, 긍정 지표 */
--warning-500: #F59E0B;    /* 주의, 약점 표시 */
--danger-500: #EF4444;     /* 오답, 경고 */
```

### Neutral Colors
```css
--gray-900: #111827;       /* 본문 텍스트 */
--gray-700: #374151;       /* 서브 텍스트 */
--gray-500: #6B7280;       /* 캡션, 보조 */
--gray-200: #E5E7EB;       /* 구분선 */
--gray-50: #F9FAFB;        /* 배경 */
--white: #FFFFFF;          /* 카드 배경 */
```

### Gradient
```css
--hero-gradient: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
--card-gradient: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
```

---

## 타이포그래피

### Font Family
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Scale

| 용도 | 크기 | 굵기 | 행간 |
|------|------|------|------|
| Hero Title | 48px / 3rem | 700 | 1.2 |
| Section Title | 36px / 2.25rem | 700 | 1.3 |
| Subsection Title | 24px / 1.5rem | 600 | 1.4 |
| Body Large | 18px / 1.125rem | 400 | 1.6 |
| Body | 16px / 1rem | 400 | 1.6 |
| Caption | 14px / 0.875rem | 400 | 1.5 |
| Small | 12px / 0.75rem | 400 | 1.4 |

### 모바일 조정
- Hero Title: 32px
- Section Title: 28px
- Subsection Title: 20px

---

## 레이아웃

### Container
```css
max-width: 1200px;
padding: 0 24px;
margin: 0 auto;

/* 모바일 */
@media (max-width: 768px) {
  padding: 0 16px;
}
```

### Section Spacing
```css
/* 섹션 간 간격 */
padding: 80px 0;

/* 모바일 */
@media (max-width: 768px) {
  padding: 48px 0;
}
```

### Grid System
```css
/* 3열 그리드 (Features) */
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;

/* 태블릿 */
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

/* 모바일 */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
```

---

## 컴포넌트 스타일

### Primary Button
```css
background: var(--primary-500);
color: white;
padding: 16px 32px;
border-radius: 12px;
font-size: 18px;
font-weight: 600;
box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
transition: all 0.2s;

&:hover {
  background: var(--primary-600);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}
```

### Secondary Button
```css
background: white;
color: var(--primary-500);
border: 2px solid var(--primary-500);
padding: 14px 30px;
border-radius: 12px;
font-size: 18px;
font-weight: 600;
transition: all 0.2s;

&:hover {
  background: var(--primary-50);
}
```

### Card
```css
background: white;
border-radius: 16px;
padding: 32px;
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
border: 1px solid var(--gray-200);
```

### Feature Card
```css
background: white;
border-radius: 20px;
padding: 40px;
text-align: center;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
transition: all 0.3s;

&:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}
```

---

## 아이콘 & 일러스트

### 아이콘 스타일
- Line 스타일 (Heroicons, Lucide)
- Stroke width: 1.5px
- Size: 24px (기본), 48px (Feature), 64px (Hero)

### 필요한 아이콘
| 용도 | 아이콘 |
|------|--------|
| 사진 촬영 | camera |
| 자동 채점 | check-circle |
| 약점 분석 | chart-bar |
| 리포트 발송 | paper-airplane |
| 시간 절감 | clock |
| 학부모 | users |

### 일러스트레이션
- 스타일: Flat, 미니멀
- 컬러: Primary Blue 기반
- 용도: Hero 배경, 빈 상태

---

## 이미지 & 미디어

### 제품 스크린샷
- 형식: PNG (투명 배경) 또는 JPG
- 해상도: 2x (Retina 대응)
- 스타일: 디바이스 목업에 삽입
- 그림자: `box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2)`

### 목업 디바이스
- iPhone 15 Pro (학부모 앱)
- MacBook Pro 14" (선생님 대시보드)
- iPad Pro (태블릿 뷰)

### 데모 영상
- 길이: 30초 ~ 1분
- 형식: MP4, WebM
- 자동 재생: 음소거 상태
- 컨트롤: 재생/일시정지만

---

## 애니메이션

### Scroll Animation
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### 인터랙션 가이드
| 요소 | 트리거 | 애니메이션 |
|------|--------|------------|
| Section | Scroll into view | Fade in up |
| Feature Card | Scroll into view | Staggered fade in |
| Stats Number | Scroll into view | Count up |
| CTA Button | Hover | Scale + Shadow |
| Product Image | Scroll into view | Slide in |

---

## 반응형 Breakpoints

```css
/* Desktop */
@media (min-width: 1280px) { }

/* Laptop */
@media (max-width: 1279px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Mobile Large */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```
