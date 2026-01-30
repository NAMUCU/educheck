import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "에듀체크 - 시험지 사진 한 장이 학습 처방전이 됩니다",
  description:
    "에듀체크는 AI 기반 학습 분석 서비스입니다. 시험지 사진 한 장으로 학생의 취약점을 분석하고 맞춤형 학습 처방전을 제공합니다.",
  keywords: [
    "에듀체크",
    "AI 학습 분석",
    "시험지 분석",
    "학습 처방전",
    "맞춤형 학습",
    "교육 AI",
    "학습 취약점 분석",
    "오답 분석",
  ],
  openGraph: {
    title: "에듀체크 - 시험지 사진 한 장이 학습 처방전이 됩니다",
    description:
      "AI 기반 학습 분석 서비스. 시험지 사진 한 장으로 학생의 취약점을 분석하고 맞춤형 학습 처방전을 제공합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "에듀체크",
  },
  twitter: {
    card: "summary_large_image",
    title: "에듀체크 - 시험지 사진 한 장이 학습 처방전이 됩니다",
    description:
      "AI 기반 학습 분석 서비스. 시험지 사진 한 장으로 학생의 취약점을 분석하고 맞춤형 학습 처방전을 제공합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, Pretendard, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        {children}
      </body>
    </html>
  );
}
