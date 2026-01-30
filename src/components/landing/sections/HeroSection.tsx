'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-20">
      {/* Subtle Background Decorations */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto px-6 pt-[120px] pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left: Text Content */}
          <motion.div
            className="max-w-[520px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              500+ 학원에서 사용 중
            </div>

            {/* Title */}
            <h1 className="text-[56px] font-extrabold leading-[1.2] tracking-tight mb-6">
              시험지 사진 한 장이
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                학습 처방전이 됩니다
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-500 mb-10 max-w-[480px] leading-relaxed">
              AI가 5초 만에 채점하고 취약점을 분석합니다.
              선생님의 밤샘 오답 노트 작업, 이제 그만하세요.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-[18px] rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                2주 무료로 시작하기
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-[18px] rounded-xl font-semibold text-base transition-all">
                <Play className="w-5 h-5" fill="currentColor" />
                30초 데모 보기
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-[18px] h-[18px] text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                신용카드 필요 없음
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-[18px] h-[18px] text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                5분 안에 시작
              </div>
            </div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Floating Card */}
              <motion.div
                className="absolute -left-10 top-[60px] bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center gap-3 z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-[10px] bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-slate-400">자동 채점 완료</p>
                  <p className="text-lg font-bold text-slate-900">2.3초</p>
                </div>
              </motion.div>

              {/* Main App Mockup - Dark Theme */}
              <div className="w-[340px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[32px] p-6 shadow-[0_32px_64px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
                {/* Mockup Header */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-white text-sm font-semibold">9:41</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-white rounded-full" />
                    <span className="w-1 h-1 bg-white rounded-full" />
                    <span className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>

                {/* Mockup Content */}
                <div className="bg-white/5 rounded-[20px] p-5">
                  <p className="text-slate-400 text-xs mb-2">오늘의 분석</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold text-[15px]">수학 중간고사</span>
                    <span className="bg-emerald-500 text-white text-xs font-semibold px-[10px] py-1 rounded-full">+12점</span>
                  </div>

                  {/* Score */}
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-[48px] font-extrabold text-white">92</span>
                    <span className="text-slate-400 text-base">/ 100</span>
                  </div>

                  {/* Chart Bars */}
                  <div className="flex gap-2 mb-5">
                    {[32, 40, 36, 44, 38].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-lg bg-gradient-to-t from-blue-600 to-cyan-400"
                        style={{ height: `${h}px`, opacity: 0.7 + i * 0.075 }}
                      />
                    ))}
                  </div>

                  {/* Insight Card */}
                  <div className="bg-cyan-500/15 rounded-xl p-[14px] flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cyan-400 text-xs font-semibold mb-0.5">취약점 발견</p>
                      <p className="text-white text-[13px]">이차방정식 근의 공식 - 복습 권장</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="bg-white/5 rounded-xl p-[14px] text-center">
                      <p className="text-xl mb-1.5">📊</p>
                      <p className="text-slate-400 text-xs">학부모 리포트</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-[14px] text-center">
                      <p className="text-xl mb-1.5">📷</p>
                      <p className="text-slate-400 text-xs">시험지 촬영</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
