'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  const trustIndicators = [
    '2분 안에 가입 완료',
    '신용카드 필요 없음',
    '언제든 해지 가능',
  ];

  return (
    <section
      id="signup"
      className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            오늘 밤부터 일찍 퇴근하세요
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-10 whitespace-pre-line">
            2주 무료 체험, 카드 등록 없이 바로 시작{'\n'}
            마음에 안 들면 그냥 안 쓰시면 됩니다
          </p>

          <motion.a
            href="#"
            className="inline-block bg-white text-blue-600 font-bold text-lg sm:text-xl px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            지금 무료로 시작하기 →
          </motion.a>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustIndicators.map((indicator, index) => (
              <motion.span
                key={index}
                className="text-white/80 text-sm sm:text-base flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <span className="text-green-300 mr-2">✓</span>
                {indicator}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
