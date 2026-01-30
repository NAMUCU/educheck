import Link from 'next/link';
import { Mail, Phone, Instagram, Youtube, MessageCircle } from 'lucide-react';

const footerLinks = {
  service: {
    title: '서비스',
    links: [
      { label: '기능', href: '#features' },
      { label: '요금제', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  support: {
    title: '고객지원',
    links: [
      { label: '문의하기', href: '/contact' },
      { label: '이용약관', href: '/terms' },
      { label: '개인정보처리방침', href: '/privacy' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Slogan */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-gray-900">에듀체크</span>
            </Link>
            <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-md">
              시험지 사진 한 장이 학습 처방전이 됩니다
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="KakaoTalk"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {footerLinks.service.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.service.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {footerLinks.support.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="mailto:support@educheck.kr"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>support@educheck.kr</span>
              </a>
              <a
                href="tel:02-1234-5678"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © 2025 에듀체크. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
