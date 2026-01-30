import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "에듀체크 - 시험지 사진 한 장이 학습 처방전이 됩니다",
  description: "에듀체크로 자동 채점, 약점 분석, 학부모 리포트까지 한번에",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
