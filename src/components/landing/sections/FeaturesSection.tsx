'use client';

import { motion } from 'framer-motion';
import { Camera, BarChart3, GitBranch, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: Camera,
    title: '사진 찍으면 자동 채점',
    content:
      '객관식, 단답형 문제를 OCR로 자동 인식. 95% 이상의 정확도로 채점합니다. 수동 입력? 이제 안녕.',
  },
  {
    icon: BarChart3,
    title: '취약 개념 TOP 3',
    content:
      '학생별로 어떤 단원, 어떤 개념에서 반복적으로 틀리는지 한눈에. 더 이상 감에 의존하지 마세요.',
  },
  {
    icon: GitBranch,
    title: "'이 순서로 가르치세요'",
    content:
      '단순 분석에서 끝나지 않습니다. 선수 개념부터 차근차근, 구체적인 학습 순서를 제안합니다.',
  },
  {
    icon: Send,
    title: '학부모 눈높이 리포트',
    content:
      "'민수는 이번 주 12문제를 풀었습니다. 완전제곱식 연습 5문제만 더 하면 잡힐 것 같아요.' 학부모가 이해하는 언어로 자동 발송.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="선생님이 원하던 바로 그 기능" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md cursor-pointer"
              >
                {/* Icon in blue circle */}
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">{feature.content}</p>

                {/* Screenshot placeholder */}
                <div className="w-full h-40 md:h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Screenshot Placeholder</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
