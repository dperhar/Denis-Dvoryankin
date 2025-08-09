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
        <h2 className="text-4xl font-bold mb-8 uppercase">ДВУХЭТАПНАЯ СТРАТЕГИЧЕСКАЯ ДИАГНОСТИКА (2+2)</h2>
        <div className="bg-[#1E1E1E] p-8 rounded-lg">
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Не продаю «инсайт за 2 часа». Мы работаем по модели 2+2:
            <br/>– <strong>Созвон‑вскрытие (90–120 мин):</strong> формируем предварительную гипотезу и запрос на данные/короткие интервью.
            <br/>– <strong>Асинхронный аудит (2–4 дня):</strong> дозревание и анализ ограниченного набора артефактов (оргструктура, запись созвона по продажам, 2–3 ключевых интервью).
            <br/>– <strong>Созвон‑презентация (60 мин):</strong> «Карта системного конфликта», выбранный сценарий решения и первые шаги внедрения.
          </p>
          
          <div className="my-8">
            <span className="text-5xl font-bold text-[#4A44F2]">100 000 – 150 000 ₽</span>
          </div>

          <div className="flex justify-center items-center text-left bg-black/50 p-4 rounded-lg mb-8 max-w-lg mx-auto">
            <ShieldIcon />
            <p className="text-gray-300 ml-4">
              Гарантия адекватности: если по итогам презентации диагноза вы сочтёте, что ценности нет – верну оплату. Беру ограниченно, чтобы сохранять глубину.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <a 
              href="https://t.me/deperhar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#4A44F2] text-white font-bold py-4 px-8 rounded-lg text-xl uppercase hover:bg-blue-800 transition-colors mb-4"
            >
              Забронировать диагностику
            </a>
            <p className="text-gray-400 text-sm">
              Можно сначала в ТГ: кратко опишите бизнес и главную боль – дам ответ, подойдём ли друг другу.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
