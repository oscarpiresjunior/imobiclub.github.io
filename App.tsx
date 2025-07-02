import React, { useRef, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import MechanismSection from './components/MechanismSection';
import BenefitsSection from './components/BenefitsSection';
import FaqSection from './components/FaqSection';
import CtaFormSection from './components/CtaFormSection';
import Footer from './components/Footer';

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
