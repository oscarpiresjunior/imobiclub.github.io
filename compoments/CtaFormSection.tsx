import React, { useState, forwardRef } from 'react';
import AnimatedSection from './AnimatedSection';

interface CtaFormSectionProps {
  remainingSlots: number;
  onFormSubmit: () => void;
}

const CtaFormSection = forwardRef<HTMLDivElement, CtaFormSectionProps>(
  ({ remainingSlots, onFormSubmit }, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!name.trim() || !email.trim()) {
        setError('Por favor, preencha todos os campos.');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Por favor, insira um e-mail válido.');
        return;
      }
      
      console.log('Form Submitted:', { name, email });
      onFormSubmit();
      setSubmitted(true);
      setName('');
      setEmail('');
      setError('');
    };

    return (
      <div ref={ref}>
        <AnimatedSection className="bg-almost-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O mercado imobiliário está mudando. De que lado você vai estar?</h2>
              <p className="text-lg text-gray-300 mb-8">Preencha abaixo para reservar uma das 100 vagas de fundador. É grátis e sem compromisso. Você só ativa seu plano quando a plataforma for lançada.</p>
              
              {submitted ? (
                <div className="bg-green-500 text-white font-bold p-6 rounded-lg text-center text-xl">
                  <p>Vaga reservada com sucesso!</p>
                  <p className="text-base font-normal mt-2">Em breve você receberá mais informações no seu e-mail.</p>
                </div>
              ) : (
                <div className="bg-white text-almost-black p-8 rounded-xl shadow-2xl">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-6">
                      <input
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Seu Melhor E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                        required
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                    <button
                      type="submit"
                      className="w-full mt-8 bg-primary text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      RESERVAR MINHA VAGA AGORA
                    </button>
                    <p className="mt-6 text-sm text-brand-gray font-semibold">
                      Atenção: Apenas <span className="text-primary text-base font-bold">{remainingSlots}</span> vagas restantes.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    );
  }
);

CtaFormSection.displayName = 'CtaFormSection';

export default CtaFormSection;