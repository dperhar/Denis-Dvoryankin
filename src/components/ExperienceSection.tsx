import React from 'react';

const enemies = [
  {
    title: "КОМАНДА Д",
    description:
      "Маркетинг кидает \"мусорные\" лиды. Продажи не могут их закрыть и винят маркетинг. Продукт пилит фичи, у которых не включается сарафанный эффект. Это и есть операционный долг: сотни человеко‑часов утекают вникуда, сжигая деньги и доверие.",
  },
  {
    title: "МЕТРИКИ ВМЕСТО РЕЗУЛЬТАТА",
    description:
      "KPI и мотивация отделов конфликтуют. Люди оптимизируют отчёты и дашборды, а не прибыль. Возникает Театр эффективности: все заняты, а ключевые метрики стоят на месте.",
  },
  {
    title: "СИНДРОМ ОСНОВАТЕЛЯ",
    description:
      "Ты — самое узкое место. Перфекционизм и «нет времени» держат решения у тебя в личке. Бизнес растёт со скоростью твоих ответов, а отпуск просто невозможен. Нужна смена архитектуры и правил, чтобы команда сама тянула результат.",
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 uppercase">
          ТРИ ИЛЛЮЗИИ, КОТОРЫЕ КРАДУТ ТВОЮ ЭНЕРГИЮ И ДЕНЬГИ
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
