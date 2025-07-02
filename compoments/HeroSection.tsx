import React, { useEffect, useState, useRef } from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

  return (
    <section ref={ref} className="bg-white">
      <div className={`container mx-auto px-6 py-24 sm:py-32 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-blue-100 text-primary text-sm font-semibold px-4 py-1 rounded-full">
            🔥 VAGAS LIMITADAS: Seja um dos 100 Corretores Fundadores.
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-almost-black leading-tight mb-6">
          A Primeira Plataforma Imobiliária do Brasil com <span className="text-primary">IA que Gera Vendas</span> em Rede.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-gray mb-10">
          Cadastre um imóvel, nossa IA cria anúncios em vídeo e texto, a rede inteira divulga e você ganha comissão mesmo quando não é você quem vende.
        </p>
        <button
          onClick={onCtaClick}
          className="bg-primary text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          QUERO GARANTIR MINHA VAGA DE FUNDADOR
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
