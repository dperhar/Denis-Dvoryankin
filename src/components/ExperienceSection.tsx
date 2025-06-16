import React from 'react';

const enemies = [
  {
    "title": "Враг #1: Операционный Рак",
    "description": "Хаос, который незаметно пускает метастазы по компании. Сжирает ресурсы, демотивирует команду и тормозит рост. Вы лечите симптомы, а инерция растет."
  },
  {
    "title": "Враг #2: Налог на Фаундера",
    "description": "Ситуация, когда каждое решение проходит через тебя. Твой бизнес не может расти быстрее, чем ты отвечаешь в телеграме. Твой отпуск – катастрофа для компании."
  },
  {
    "title": "Враг #3: Имитация Роста",
    "description": "Красивые дашборды, суета в чатах, постоянные созвоны. Все заняты, но деньги в кассе не растут. Это Имитация Бурной Деятельности, которая сжигает твой ФОТ и веру в команду."
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 uppercase">
          С чем мы боремся на самом деле
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {enemies.map((enemy, index) => (
            <div key={index} className="bg-[#1E1E1E] p-8 rounded-lg text-left flex flex-col">
              <h3 className="text-2xl font-bold mb-4 uppercase">
                {enemy.title}
              </h3>
              <p className="text-gray-300">
                {enemy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
