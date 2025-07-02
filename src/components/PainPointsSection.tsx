import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ClockIcon, DollarSlashIcon, UsersIcon } from './icons';

interface PainPointCardProps {
  icon: React.ReactNode;
  text: string;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ icon, text }) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center">
    <div className="bg-blue-100 text-primary p-4 rounded-full mb-6">
      {icon}
    </div>
    <p className="text-brand-gray font-medium leading-relaxed">{text}</p>
  </div>
);

const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: <ClockIcon className="w-8 h-8" />,
      text: "Passa horas criando posts que não geram nenhum lead qualificado.",
    },
    {
      icon: <DollarSlashIcon className="w-8 h-8" />,
      text: "Gasta dinheiro com anúncios e portais sem ter um retorno claro do investimento.",
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      text: "Sente que está sempre competindo, em vez de colaborar, com outros corretores.",
    },
  ];

  return (
    <AnimatedSection className="bg-light-gray-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-almost-black">Você se identifica com isso?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard key={index} icon={point.icon} text={point.text} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PainPointsSection;
