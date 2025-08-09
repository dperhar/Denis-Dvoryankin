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
          <h2 className="text-4xl font-bold mb-8 uppercase text-center lg:text-left">ПОЧЕМУ Я, А НЕ ОЧЕРЕДНОЙ "ЭКСПЕРТ"</h2>
          <img 
            src="/lovable-uploads/09c17969-af5d-478c-a330-05834a69a255.png" 
            alt="Денис Дворянкин" 
            className="rounded-2xl mb-8 w-full max-w-md object-cover shadow-lg" 
            loading="lazy"
          />
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Системный взгляд, а не советы с дивана:</strong> Я не буду учить твоих профи, как нужно работать. Я <strong>просканирую твою систему</strong> и покажу, где <strong>реальная причина</strong> пробуксовки – в конфликте отделов, в сломанном процессе или в твоем собственном «слепом пятне».</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Шрамы, а не дипломы МВА:</strong> Мои решения – не из книжек и курсов скиллбокс. Я опираюсь на боевой опыт в стартапах и корпорациях, где горел реальный кэш и захватывались реальные рынки.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Спарринг‑партнер, а не «удобный» консультант:</strong> Я не поддакиваю. Я бережно, но решительно показываю реальность и держу тебя в фокусе до результата.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><CheckIcon /></span>
              <span><strong>Интуиция, подкрепленная данными:</strong> Я не просто смотрю на ваши дашборды. Я <strong>чувствую пульс</strong> вашей компании. Моя работа – соединить то, что я <strong>интуитивно считываю</strong> о вашей команде и процессах, с <strong>жесткими цифрами</strong>. Часто самый большой рычаг для роста скрыт не в аналитике, а в том, о чём все молчат. Я помогаю это увидеть и превратить в план действий.</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="bg-[#4A44F2] p-8 rounded-2xl h-full text-left">
          <h2 className="text-4xl font-bold mb-8 uppercase">Как устроена диагностика (2+2)</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span><strong>Сессия‑вскрытие (90–120 мин):</strong> слушаю, задаю вскрывающие вопросы, формулирую предварительную гипотезу и запрос на данные.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span><strong>Асинхронный аудит (2–4 дня):</strong> дозревание и анализ ограниченного набора артефактов (оргструктура, запись созвона по продажам, 2–3 коротких интервью).</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span><strong>Сессия‑презентация (60 мин):</strong> «Карта системного конфликта», выбранный сценарий решения и первые шаги внедрения.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span><strong>Безопасный доступ:</strong> не «неделя в компании», а точечные запросы и 2–3 разговора — быстро, конкретно, не отвлекая от насущных дел.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-1"><ArrowIcon /></span>
              <span><strong>Стоимость:</strong> 120 000 ₽ за весь короткий проект.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* What we will build together */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-[#4A44F2] p-8 md:p-12 rounded-2xl text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 uppercase">ЧТО МЫ ПОСТРОИМ ВМЕСТЕ</h3>
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
              <span>Твою свободу. Возможность снова заниматься тем, ради чего ты всё это начинал.</span>
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
