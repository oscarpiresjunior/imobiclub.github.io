import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-brand-gray">
        <p className="mb-4">&copy; {new Date().getFullYear() + 1} ImobiClub. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
