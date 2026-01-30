'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: '어떤 과목을 지원하나요?',
    answer:
      '현재 수학 과목의 객관식/단답형 문제를 지원합니다. 영어, 국어 과목은 곧 추가될 예정입니다.',
  },
  {
    question: 'OCR 인식 정확도는 어떻게 되나요?',
    answer:
      '인쇄체 기준 95% 이상의 정확도를 보장합니다. 혹시 인식이 잘못된 경우 간단히 수정할 수 있습니다.',
  },
  {
    question: '기존 학생 데이터를 옮길 수 있나요?',
    answer:
      '네, 엑셀 파일로 학생 명단을 한 번에 업로드할 수 있습니다. 기존 데이터 이전도 무료로 도와드립니다.',
  },
  {
    question: '학부모 앱은 어떻게 설치하나요?',
    answer:
      '학생 등록 시 학부모 전화번호를 입력하면, 앱 설치 안내 문자가 자동 발송됩니다. 앱 없이 카카오톡으로도 리포트를 받을 수 있습니다.',
  },
  {
    question: '해지는 어떻게 하나요?',
    answer:
      '설정에서 원클릭 해지 가능합니다. 위약금 없으며, 데이터는 30일간 보관 후 안전하게 삭제됩니다.',
  },
  {
    question: '개인정보는 안전한가요?',
    answer:
      '모든 데이터는 암호화되어 저장되며, 개인정보보호법을 철저히 준수합니다. 학생 정보는 학원 관리자만 접근 가능합니다.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            자주 묻는 질문
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
