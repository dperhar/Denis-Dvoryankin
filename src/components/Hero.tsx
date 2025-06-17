import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Денис Дворянкин</div>
          <div className="flex items-center space-x-6">
            <a href="https://t.me/deperhar" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <img 
                src="/lovable-uploads/1fafdfff-e5a9-4eec-8d26-d69e1b5c572b.png" 
                alt="Telegram" 
                className="w-6 h-6 hover:opacity-80 transition-opacity" 
                loading="lazy"
              />
            </a>
            <a href="https://linkedin.com/in/dperhar-discovery/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img 
                src="/lovable-uploads/cd2e400b-10af-440e-9c60-41d90ff37414.png" 
                alt="LinkedIn" 
                className="w-[30px] h-6 hover:opacity-80 transition-opacity" 
                loading="lazy"
              />
            </a>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start space-y-6 text-left">
            <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
              Когда рост уперся в хаос
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Системная реанимация для B2B-бизнеса, который перерос своего основателя.
            </p>
            <a href="#schedule" className="bg-[#4A44F2] text-white font-bold py-4 px-8 rounded-lg text-xl uppercase hover:bg-blue-800 transition-colors mt-4">
              Узнать диагноз
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/lovable-uploads/dff2e6ef-cc45-4551-b424-e9de5d6ce4be.png"
              alt="Денис Дворянкин professional photo"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
