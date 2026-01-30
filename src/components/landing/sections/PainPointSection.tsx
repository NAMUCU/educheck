'use client';

import { motion } from 'framer-motion';
import { Clock, Users, XCircle, LucideIcon } from 'lucide-react';

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  delay: number;
}

const painPoints = [
  {
    icon: Clock,
    title: '매일 밤 오답 노트 수작업',
    content:
      '수업 끝나고 밤 12시까지 학생별 오답 정리... 엑셀에 한 문제씩 입력하는 것도 이젠 지쳤습니다.',
  },
  {
    icon: Users,
    title: "'왜 우리 애가 이걸 틀려요?'",
    content:
      "학부모님의 질문에 수치화된 근거로 답하기 어렵습니다. '좀 더 노력하면 됩니다'라는 말만 반복하게 됩니다.",
  },
  {
    icon: XCircle,
    title: '문제은행 서비스, 또 포기',
    content:
      "'자동 생성'이라면서 결국 기초 데이터는 수동 입력. 8개월 버티다 포기한 적 있으시죠?",
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

function PainPointCard({ icon: Icon, title, content, delay }: PainPointCardProps) {
  return (
    <motion.div
      custom={delay}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200">
        <Icon className="h-7 w-7 text-gray-600" strokeWidth={1.5} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-base leading-relaxed text-gray-600">{content}</p>
    </motion.div>
  );
}

export default function PainPointSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            혹시 선생님도 이런 고민 있으신가요?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {painPoints.map((painPoint, index) => (
            <PainPointCard
              key={index}
              icon={painPoint.icon}
              title={painPoint.title}
              content={painPoint.content}
              delay={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
