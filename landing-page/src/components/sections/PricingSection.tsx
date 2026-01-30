'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';

interface PricingTier {
  name: string;
  price: string;
  priceSubtext?: string;
  students: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  variant: 'outline' | 'solid';
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '월 49,000원',
    students: '30명까지',
    features: ['자동 채점', '약점 분석', '학부모 리포트', '출결 관리'],
    ctaText: '무료로 시작하기',
    variant: 'outline',
  },
  {
    name: 'Pro',
    price: '월 89,000원',
    students: '100명까지',
    features: ['Basic 전체 기능', '선생님 다중 계정', '우선 지원', '고급 분석'],
    ctaText: '무료로 시작하기',
    isPopular: true,
    variant: 'solid',
  },
  {
    name: 'Enterprise',
    price: '문의',
    students: '무제한',
    features: ['Pro 전체 기능', '전담 매니저', 'API 연동', '맞춤 개발'],
    ctaText: '상담 신청',
    variant: 'outline',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="부담 없이 시작하세요" />
        </motion.div>

        {/* Free Trial Banner */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-6 py-3 rounded-full text-sm md:text-base">
            2주 무료 체험 - 신용카드 등록 없이 바로 시작
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.isPopular
                  ? 'border-2 border-blue-500 shadow-lg md:scale-105 z-10'
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    인기
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
              </div>

              {/* Students */}
              <p className="text-gray-500 mb-6">{tier.students}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-700"
                  >
                    <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#"
                className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  tier.variant === 'solid'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow'
                    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.ctaText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
