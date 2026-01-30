# 04. 기술 스펙

## 기술 스택

### Frontend
| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 14.x | 프레임워크 (App Router) |
| TypeScript | 5.x | 타입 안정성 |
| Tailwind CSS | 3.x | 스타일링 |
| Framer Motion | 10.x | 애니메이션 |

### 추가 라이브러리
| 라이브러리 | 용도 |
|------------|------|
| `react-intersection-observer` | 스크롤 애니메이션 트리거 |
| `react-countup` | 숫자 카운트업 애니메이션 |
| `@headlessui/react` | 접근성 컴포넌트 (Modal, Accordion) |
| `lucide-react` | 아이콘 |

---

## 프로젝트 구조

```
landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 랜딩 페이지
│   │   ├── globals.css         # 글로벌 스타일
│   │   └── fonts/              # 로컬 폰트 (Pretendard)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # 상단 네비게이션
│   │   │   └── Footer.tsx      # 푸터
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PainPointSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── SocialProofSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Accordion.tsx
│   │       ├── CountUp.tsx
│   │       ├── AnimatedSection.tsx
│   │       └── DeviceMockup.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts        # 상수 (카피, 링크 등)
│   │   └── utils.ts            # 유틸리티 함수
│   │
│   └── types/
│       └── index.ts            # 타입 정의
│
├── public/
│   ├── images/
│   │   ├── hero/               # Hero 섹션 이미지
│   │   ├── screenshots/        # 제품 스크린샷
│   │   ├── icons/              # 커스텀 아이콘
│   │   └── testimonials/       # 후기 프로필 (옵션)
│   │
│   ├── videos/
│   │   └── demo.mp4            # 데모 영상
│   │
│   └── fonts/                  # 폰트 파일
│
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 컴포넌트 명세

### AnimatedSection
스크롤 시 애니메이션이 트리거되는 wrapper 컴포넌트

```tsx
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  className?: string;
}
```

### Button
재사용 가능한 버튼 컴포넌트

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}
```

### Card
기능 카드, 요금제 카드 등

```tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'pricing';
  hover?: boolean;
  className?: string;
}
```

### DeviceMockup
디바이스 프레임에 스크린샷 표시

```tsx
interface DeviceMockupProps {
  src: string;
  alt: string;
  device?: 'iphone' | 'macbook' | 'ipad';
  className?: string;
}
```

### CountUp
숫자 카운트업 애니메이션

```tsx
interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}
```

### Accordion (FAQ용)
```tsx
interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}
```

---

## SEO 설정

### Metadata (app/layout.tsx)
```tsx
export const metadata: Metadata = {
  title: '에듀체크 - 시험지 사진 한 장이 학습 처방전이 됩니다',
  description: '사진만 찍으면 자동 채점, 약점 분석, 학부모 리포트까지. 중소형 학원을 위한 스마트 학습 관리 솔루션.',
  keywords: ['학원 관리', '자동 채점', '오답 분석', '학습 리포트', '에듀테크'],
  openGraph: {
    title: '에듀체크 - 시험지 사진 한 장이 학습 처방전이 됩니다',
    description: '사진만 찍으면 자동 채점, 약점 분석, 학부모 리포트까지.',
    url: 'https://educheck.kr',
    siteName: '에듀체크',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '에듀체크',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '에듀체크',
    description: '시험지 사진 한 장이 학습 처방전이 됩니다',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Structured Data (JSON-LD)
```tsx
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '에듀체크',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '49000',
    priceCurrency: 'KRW',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '500',
  },
};
```

---

## 성능 최적화

### 이미지 최적화
```tsx
// Next.js Image 컴포넌트 사용
import Image from 'next/image';

<Image
  src="/images/screenshot.png"
  alt="에듀체크 대시보드"
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

### 폰트 최적화
```tsx
// next/font 사용
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    { path: './fonts/Pretendard-Regular.woff2', weight: '400' },
    { path: './fonts/Pretendard-Medium.woff2', weight: '500' },
    { path: './fonts/Pretendard-SemiBold.woff2', weight: '600' },
    { path: './fonts/Pretendard-Bold.woff2', weight: '700' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});
```

### 코드 스플리팅
```tsx
// 동적 임포트로 번들 크기 최적화
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64" />,
  ssr: false,
});
```

### Core Web Vitals 목표
| 지표 | 목표 |
|------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

---

## 분석 & 추적

### Google Analytics 4
```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
```

### 이벤트 추적
```tsx
// lib/analytics.ts
export const trackEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// 사용 예시
trackEvent('cta_click', {
  location: 'hero',
  button_text: '2주 무료로 시작하기'
});
```

### 추적할 이벤트 목록
| 이벤트 | 트리거 | 파라미터 |
|--------|--------|----------|
| `page_scroll` | 25%, 50%, 75%, 100% 스크롤 | `depth` |
| `cta_click` | CTA 버튼 클릭 | `location`, `button_text` |
| `demo_video_play` | 데모 영상 재생 | `video_title` |
| `faq_expand` | FAQ 항목 펼침 | `question` |
| `pricing_view` | 요금제 섹션 진입 | - |

---

## 폼 처리

### 무료 체험 신청 폼
```tsx
interface SignupFormData {
  academyName: string;
  ownerName: string;
  phone: string;
  email: string;
  studentCount: string;
  agreeToTerms: boolean;
}
```

### 폼 제출 처리
```tsx
// API Route 또는 서버 액션
export async function submitSignup(data: SignupFormData) {
  // 1. 유효성 검증
  // 2. CRM/DB에 저장
  // 3. 환영 이메일 발송
  // 4. Slack 알림 (선택)
}
```

---

## 배포 설정

### Vercel 배포
```json
// vercel.json
{
  "framework": "nextjs",
  "regions": ["icn1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### 환경 변수
```env
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://educheck.kr
CRM_API_KEY=xxx
SLACK_WEBHOOK_URL=xxx
```
