import React from 'react';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4A44F2"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
  </svg>
);

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start text-left">
          <h2 className="text-4xl font-bold mb-8 uppercase text-center lg:text-left">Почему я, а не очередной консультант</h2>
          <img src="/denis-services.png" alt="Денис Поркар" className="rounded-2xl mb-8 w-full max-w-md" />
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Хирургическая точность:</strong> Вижу корневую проблему, а не симптомы. Отличаю реальную боль от фантомных болей роста.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Опыт из окопов:</strong> Я сам строил отделы, продавал, отвечал за P&L. В топ банках, в международных стартапах и в среднем бизнесе, лидирующем в своей нише. Мои советы – не из книжек, а из реальных шрамов.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Психология и AI:</strong> Понимаю, как работает голова фаундера и как заставить AI работать на бизнес. Внедряю то, что реально приживется.</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="bg-[#4A44F2] p-8 rounded-2xl h-full text-left">
          <h2 className="text-4xl font-bold mb-8 uppercase">С какими запросами я работаю</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Построим систему, которая генерирует деньги, а не хаос.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Найдем ту самую точку роста, где минимальные усилия дают максимальный ROI.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Превратим твою интуицию в четкий план с цифрами и сроками.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Сделаем из твоей команды автономный спецназ, а не кружок по интересам.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Вернем тебе время и энергию, чтобы ты снова кайфовал от своего бизнеса, а не был его рабом.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
