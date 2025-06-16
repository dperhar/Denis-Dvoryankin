import React from 'react';

const faqs = [
  {
    "question": "Что ты понимаешь в моем бизнесе?",
    "answer": "Я не эксперт в твоей нише. Я эксперт в системах роста. Процессы продаж, найма и управления ломаются одинаково в любом B2B. Я чиню систему, а не продукт."
  },
  {
    "question": "Это очередная болтовня или реальная работа?",
    "answer": "Первая сессия – 2 часа глубокой диагностики. Не лекция, а допрос с пристрастием. Уйдешь с 2-3 гипотезами, которые можно проверить завтра."
  },
  {
    "question": "Что я получу сразу?",
    "answer": "Сразу – ясность. Поймешь, где на самом деле горит и что с этим делать. Дорожную карту трансформации – после полного аудита. А изменения и дзен – после моей работы с твоей командой."
  },
  {
    "question": "Ты будешь грузить меня сложными фреймворками?",
    "answer": "Нет. Я использую здравый смысл, математику и опыт. Теория ограничений систем, JTBD, HADI – это просто инструменты в ящике, а не религия. Беру то, что нужно для вскрытия твоей проблемы."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-center text-4xl font-bold mb-12 uppercase">
          Ответы, которые помогут решиться на операцию
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4 text-left">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
