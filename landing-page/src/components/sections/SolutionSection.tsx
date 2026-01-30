'use client';

import { motion } from 'framer-motion';
import { Camera, BarChart3, FileText, ArrowRight, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: '찍기',
    subtitle: '시험지 사진 촬영',
    content:
      '학생의 시험지를 스마트폰으로 촬영하세요. 5초면 OCR이 답안을 자동으로 인식합니다.',
  },
  {
    icon: BarChart3,
    number: '02',
    title: '분석',
    subtitle: '자동 채점 & 약점 분석',
    content:
      '정답과 오답을 자동으로 채점하고, 어떤 개념이 약한지 즉시 분석합니다.',
  },
  {
    icon: FileText,
    number: '03',
    title: '처방',
    subtitle: '학습 처방 가이드',
    content:
      "'이 학생은 완전제곱식이 약합니다. 이 순서로 복습시키세요.' 구체적인 처방을 받으세요.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function SolutionSection() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            에듀체크는 다릅니다
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            사진 한 장이면 끝나니까요
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div className="absolute top-20 left-[calc(16.67%+60px)] right-[calc(16.67%+60px)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

            <div className="grid grid-cols-3 gap-8 pt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                  variants={itemVariants}
                >
                  {/* Step Number Badge */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                    STEP {step.number}
                  </span>

                  {/* Icon Container */}
                  <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 mb-6">
                    <step.icon className="w-14 h-14 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 -right-4 translate-x-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-blue-500" />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    {step.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Connecting Line */}
              <div className="absolute left-8 sm:left-12 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="relative flex gap-6 sm:gap-8"
                    variants={itemVariants}
                  >
                    {/* Icon Container */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <step.icon className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
                      </div>
                      {/* Step Number Badge (Mobile) */}
                      <span className="absolute -top-2 -right-2 text-xs font-bold text-white bg-blue-600 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    {/* Arrow between steps (mobile) */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 sm:left-12 top-20 sm:top-28 -translate-x-1/2 z-20">
                        <ChevronDown className="w-6 h-6 text-blue-500" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm sm:text-base mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
