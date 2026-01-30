'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

interface Statistic {
  value: string;
  suffix?: string;
  label: string;
  numericValue: number;
  isDecimal?: boolean;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  studentCount: string;
  avatarColor: string;
}

const statistics: Statistic[] = [
  {
    value: '90',
    suffix: '%',
    label: '오답 정리 시간 절감',
    numericValue: 90,
  },
  {
    value: '500',
    suffix: '+',
    label: '사용 중인 학원',
    numericValue: 500,
  },
  {
    value: '4.8',
    suffix: '/5',
    label: '선생님 만족도',
    numericValue: 4.8,
    isDecimal: true,
  },
  {
    value: '15,000',
    suffix: '+',
    label: '발송된 학부모 리포트',
    numericValue: 15000,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      '매일 새벽 1시까지 하던 오답 노트 작업이 5분으로 줄었어요. 이제 수업 준비에 더 집중할 수 있습니다.',
    name: '김○훈 원장',
    role: '수학학원',
    location: '경기 안양',
    studentCount: '학생 45명',
    avatarColor: 'bg-blue-500',
  },
  {
    quote:
      "학부모님께 '이 개념이 약합니다'라고 수치로 보여드리니까 상담이 훨씬 수월해졌어요. 신뢰도가 올라갔습니다.",
    name: '이○희 강사',
    role: '영어학원',
    location: '서울 대치동',
    studentCount: '학생 30명',
    avatarColor: 'bg-purple-500',
  },
  {
    quote:
      '문제은행 서비스 3개나 포기했는데, 에듀체크는 달라요. 진짜 사진만 찍으면 끝이에요.',
    name: '최○식 원장',
    role: '보습학원',
    location: '부산 해운대',
    studentCount: '학생 50명',
    avatarColor: 'bg-green-500',
  },
];

function useCountUp(
  end: number,
  duration: number = 2000,
  isInView: boolean,
  isDecimal: boolean = false
) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentValue = startValue + (end - startValue) * easeOutQuad;

      if (isDecimal) {
        setCount(Math.round(currentValue * 10) / 10);
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView, isDecimal]);

  return count;
}

function StatisticCard({ stat, index }: { stat: Statistic; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp(stat.numericValue, 2000, isInView, stat.isDecimal);

  const formatNumber = (num: number): string => {
    if (stat.isDecimal) {
      return num.toFixed(1);
    }
    return num.toLocaleString('ko-KR');
  };

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
        {formatNumber(count)}
        <span className="text-3xl sm:text-4xl">{stat.suffix}</span>
      </div>
      <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
    </motion.div>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-100 mb-4"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const initial = testimonial.name.charAt(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="h-full flex flex-col" hover>
        <QuoteIcon />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed flex-grow mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
          {/* Avatar placeholder */}
          <div
            className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
          >
            {initial}
          </div>
          <div className="ml-4">
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-500">
              {testimonial.location} {testimonial.role} ({testimonial.studentCount})
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24">
      <Container>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="이미 500개 학원이 밤을 되찾았습니다" />
        </motion.div>

        {/* Academy Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {['수학의정석학원', '영어명문학원', '과학탐구학원', '대치TOP학원', '강남SKY학원'].map((name) => (
            <div key={name} className="px-4 py-2 bg-gray-100 rounded-lg">
              <span className="text-sm font-medium text-gray-500">{name}</span>
            </div>
          ))}
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {statistics.map((stat, index) => (
            <StatisticCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
