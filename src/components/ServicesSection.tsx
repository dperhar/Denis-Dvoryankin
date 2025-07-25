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
          <h2 className="text-4xl font-bold mb-8 uppercase text-center lg:text-left">Почему я, а не очередной "эксперт"</h2>
          <img 
            src="/lovable-uploads/09c17969-af5d-478c-a330-05834a69a255.png" 
            alt="Денис Дворянкин" 
            className="rounded-2xl mb-8 w-full max-w-md object-cover shadow-lg" 
            loading="lazy"
          />
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Системный взгляд, а не советы с дивана:</strong> Я руководил командами, был сейлзом, продактом и CS в топ-банках и глобальных стартапах. Я не буду учить тебя продавать. Я вскрою твой системный конфликт и спроектирую решение.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Шрамы, а не дипломы MBA:</strong> Мои решения – не из книжек и курсов скиллбокс. Они основаны на шрамах, полученных в реальных компаниях, где я отвечал за P&L. Я знаю, как пахнет сгоревший кэш. И как пахнут деньги, заработанные работающей системой.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Спарринг-партнер, а не "удобный" консультант:</strong> Я не ищу работу. Я ищу проблему, достойную моего внимания. Я буду задавать вопросы, от которых тебе станет неудобно. Моя цель – не понравиться тебе, а помочь твоему бизнесу реализовать свой истинный потенциал.</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="bg-[#4A44F2] p-8 rounded-2xl h-full text-left">
          <h2 className="text-4xl font-bold mb-8 uppercase">Что мы построим вместе</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Операционную систему, которая работает без твоего круглосуточного надзора.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Точку приложения силы, где 10% усилий дают 90% результата.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Команду, которая мыслит результатом, а не тасками в Jira.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Твою свободу. Возможность снова заниматься тем, ради чего ты все это начинал.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span>Жестокую, но необходимую ясность. Фундамент для принятия сильных и честных решений.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
