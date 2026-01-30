'use client';

import Header from '@/components/landing/layout/Header';
import Footer from '@/components/landing/layout/Footer';
import HeroSection from '@/components/landing/sections/HeroSection';
import PainPointSection from '@/components/landing/sections/PainPointSection';
import FeaturesSection from '@/components/landing/sections/FeaturesSection';
import SocialProofSection from '@/components/landing/sections/SocialProofSection';
import PricingSection from '@/components/landing/sections/PricingSection';
import FAQSection from '@/components/landing/sections/FAQSection';
import CTASection from '@/components/landing/sections/CTASection';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointSection />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
