import React, { useRef, useState } from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import PainPointsSection from './components/PainPointsSection.tsx';
import MechanismSection from './components/MechanismSection.tsx';
import BenefitsSection from './components/BenefitsSection.tsx';
import FaqSection from './components/FaqSection.tsx';
import CtaFormSection from './components/CtaFormSection.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [remainingSlots, setRemainingSlots] = useState(100);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleFormSubmit = () => {
    setRemainingSlots(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onCtaClick={handleScrollToForm} />
      <main className="flex-grow">
        <HeroSection onCtaClick={handleScrollToForm} />
        <PainPointsSection />
        <MechanismSection />
        <BenefitsSection />
        <FaqSection />
        <CtaFormSection 
          ref={formRef} 
          remainingSlots={remainingSlots} 
          onFormSubmit={handleFormSubmit} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
