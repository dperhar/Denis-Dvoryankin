import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Денис Дворянкин</div>
          <div className="flex items-center space-x-6">
            <a href="#" aria-label="Social Media 1">
              <img src="/icon-social-1.svg" alt="Social Icon 1" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/icon-linkedin.svg" alt="LinkedIn Icon" className="w-6 h-6" />
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
              src="/denis-hero.png"
              alt="Денис Дворянкин professional photo"
              className="w-full max-w-md lg:max-w-lg rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
