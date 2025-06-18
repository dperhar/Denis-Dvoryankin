import React from 'react';
import { Send, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Денис Дворянкин</div>
          <div className="flex items-center space-x-6">
            <a href="https://t.me/deperhar" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Send size={28} className="text-white hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://linkedin.com/in/dperhar-discovery/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={28} className="text-white hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]">
          <div className="flex flex-col items-start space-y-4 lg:space-y-6 text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
              Когда твой бизнес растет медленнее, чем твои амбиции?
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-xl">
              Для основателей, которые готовы перестать бороться со своим бизнесом и снова сделать его своим главным союзником.
            </p>
            <a href="#schedule" className="bg-[#4A44F2] text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg text-lg lg:text-xl uppercase hover:bg-blue-800 transition-colors mt-2 lg:mt-4">
              Вернуть фокус
            </a>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src="/lovable-uploads/dff2e6ef-cc45-4551-b424-e9de5d6ce4be.png"
              alt="Денис Дворянкин professional photo"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
