import React from 'react';
import AnimatedSection from './AnimatedSection';
import { UploadIcon, BrainIcon, MegaphoneIcon } from './icons';

interface MechanismStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MechanismStep: React.FC<MechanismStepProps> = ({ icon, title, description }) => (
  <div className="text-center md:text-left md:flex md:items-start md:space-x-6">
    <div className="flex-shrink-0 mx-auto md:mx-0 bg-primary text-white p-5 rounded-full mb-6 md:mb-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-almost-black mb-2">{title}</h3>
      <p className="text-brand-gray leading-relaxed">{description}</p>
    </div>
  </div>
);

const MechanismSection: React.FC = () => {
  const steps = [
    {
      icon: <UploadIcon className="w-10 h-10" />,
      title: "Você Cadastra o Imóvel",
      description: "Forneça as fotos e informações básicas. Simples e rápido.",
    },
    {
      icon: <BrainIcon className="w-10 h-10" />,
      title: "Nossa IA Cria o Marketing",
      description: "Em segundos, geramos vídeos narrados, posts para todas as redes sociais e textos de alta conversão.",
    },
    {
      icon: <MegaphoneIcon className="w-10 h-10" />,
      title: "A Rede Vende com Você",
      description: "Seu imóvel é divulgado automaticamente por centenas de corretores. Se a venda acontecer, a comissão é dividida de forma justa e transparente.",
    },
  ];

  return (
    <AnimatedSection className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-almost-black mb-4">Apresentamos o Mecanismo do ImobiClub: IA + Rede + Comissão</h2>
          <p className="text-lg text-brand-gray">Criamos um ecossistema onde seu esforço é multiplicado por toda a comunidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <MechanismStep key={index} icon={step.icon} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MechanismSection;
