import React from 'react';

const enemies = [
  {
    title: "KPI‑конфликт отделов",
    description:
      "Маркетинг и продажи тянут в разные стороны. Метрики и мотивация конфликтуют, люди оптимизируют не общий результат, а свои показатели. Итог — постоянная турбулентность и потеря выручки.",
  },
  {
    title: "Стыки процессов забиты",
    description:
      "Передача лида, контракта или обратной связи рвётся на границах команд. Решения застревают, а \"камни в шестерёнках\" сжигают время, деньги и доверие.",
  },
  {
    title: "Слепое пятно фаундера",
    description:
      "Правила, структура и стиль управления, заданные сверху, непреднамеренно порождают поведение, которое потом приходится тушить. Нужен внешний взгляд, чтобы увидеть свой вклад в проблему и сменить архитектуру.",
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 uppercase">
          Где обычно зарыта корневая причина
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
