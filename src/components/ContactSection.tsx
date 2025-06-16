import React from 'react';

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.92V12H5V6.3L12 4.15V11.99Z" fill="#4A44F2"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  return (
    <section id="schedule" className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase">
          Хватит тушить пожары. Приходите фиксить причину.
        </h2>
        <div className="bg-[#1E1E1E] p-8 rounded-lg">
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Запишись на 2-часовую диагностическую сессию. Мы разберем твой главный затык, и я покажу тебе 2-3 неочевидные точки роста. Ты получишь ясность и пошаговый план, даже если мы не пойдем работать дальше.
          </p>
          
          <div className="my-8">
            <span className="text-5xl font-bold text-[#4A44F2]">50 000 ₽</span>
          </div>

          <div className="flex justify-center items-center text-left bg-black/50 p-4 rounded-lg mb-8 max-w-lg mx-auto">
            <ShieldIcon />
            <p className="text-gray-300 ml-4">
              Если по итогам сессии ты решишь, что это было бесполезно – я верну деньги. Без вопросов.
            </p>
          </div>

          <div className="bg-gray-900 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[ Placeholder for Calendly Widget ]</p>
          </div>
        </div>
      </div>
    </section>
  );
};
