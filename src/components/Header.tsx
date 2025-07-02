import React from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 bg-light-gray-bg/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-almost-black">
          Imobi<span className="text-primary">Club</span>
        </h1>
        <button
          onClick={onCtaClick}
          className="hidden sm:inline-block bg-primary text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Garantir Minha Vaga
        </button>
      </div>
    </header>
  );
};

export default Header;
