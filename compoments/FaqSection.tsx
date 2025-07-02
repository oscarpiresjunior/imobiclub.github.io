import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left"
    >
      <h3 className="text-lg font-semibold text-almost-black">{question}</h3>
      <ChevronDownIcon className={`w-6 h-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
      <p className="text-brand-gray leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso vender para ganhar comissão?",
      answer: "Não. No ImobiClub, você ganha de 3 formas: como Corretor Líder (70%), como Indicador (20%) ou simplesmente por ser um membro ativo do Plano Pro ou Master, participando do rateio de 10% de TODAS as vendas da rede.",
    },
    {
      question: "Eu mesmo tenho que criar ou gravar os vídeos?",
      answer: "Absolutamente não. A IA faz todo o trabalho pesado. Ela cria o roteiro, a narração com voz neural e o vídeo com as fotos do imóvel. Você só precisa aprovar com um clique.",
    },
    {
      question: "Isso realmente funciona para o algoritmo do Instagram?",
      answer: "Sim, e essa é a nossa arma secreta. Quando centenas de membros postam e se engajam com o mesmo imóvel ao mesmo tempo, o algoritmo interpreta como um conteúdo de altíssimo potencial viral, distribuindo-o organicamente para milhares de pessoas.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-almost-black">Suas Dúvidas, Respondidas.</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FaqSection;
