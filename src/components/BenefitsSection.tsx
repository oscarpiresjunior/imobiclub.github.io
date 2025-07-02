import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CheckIcon } from './icons';

interface BenefitItemProps {
  children: React.ReactNode;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ children }) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
      <CheckIcon className="w-4 h-4" />
    </div>
    <span className="text-brand-gray text-lg">{children}</span>
  </li>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Acesso Vitalício ao Grupo de Fundadores: Participe da evolução da plataforma com voz ativa.",
    "90 Dias de Acesso Gratuito ao Plano Master: Use todos os recursos ilimitados, sem custo.",
    "Participação Garantida no Rateio de Comissão: Comece a ganhar com as vendas da rede desde o primeiro dia.",
    "Selo de \"Corretor Fundador\": Destaque permanente no seu perfil dentro da plataforma.",
    "Seu Nome no Hall da Fama Oficial: Reconhecimento eterno como um dos pioneiros do ImobiClub."
  ];

  return (
    <AnimatedSection className="bg-light-gray-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-almost-black mb-4">Uma Oferta Irresistível Para os 100 Primeiros</h2>
          <p className="text-lg text-brand-gray">Ao reservar sua vaga agora, você garante acesso vitalício a benefícios que nunca mais estarão disponíveis.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
