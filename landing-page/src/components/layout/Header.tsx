'use client';

import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: '기능', sectionId: 'features' },
    { label: '요금제', sectionId: 'pricing' },
    { label: 'FAQ', sectionId: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              에듀체크
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className={`text-lg font-bold transition-colors hover:text-[#3B82F6] ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('signup')}
              className="px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-lg hover:bg-[#2563EB] transition-colors"
            >
              무료로 시작하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col px-4 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="py-3 text-left text-gray-700 font-medium hover:text-[#3B82F6] transition-colors border-b border-gray-100"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-auto p-4">
              <button
                onClick={() => scrollToSection('signup')}
                className="w-full px-5 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563EB] transition-colors"
              >
                무료로 시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
