
import React from 'react';
import { FAQItem } from './ui/faq-item';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Что ты понимаешь в моем бизнесе?",
      answer: "Я не эксперт в твоей нише. Я эксперт в системах роста. Процессы продаж, найма и управления ломаются одинаково в любом B2B. Я чиню систему, а не продукт."
    },
    {
      question: "Это очередная болтовня или реальная работа?",
      answer: "Первая сессия – 2 часа глубокой диагностики. Не лекция, а допрос с пристрастием. Уйдешь с 2-3 гипотезами, которые можно проверить завтра."
    },
    {
      question: "Что я получу сразу?",
      answer: "Сразу – ясность. Поймешь, где на самом деле горит и что с этим делать. Дорожную карту трансформации – после полного аудита."
    },
    {
      question: "Ты будешь грузить меня сложными фреймворками?",
      answer: "Нет. Я использую здравый смысл, математику и опыт. TOC, JTBD, HADI – это просто инструменты в ящике, а не религия. Беру то, что нужно для вскрытия твоей проблемы."
    }
  ];

  return (
    <section className="relative pt-[200px] pb-0 px-[499px] max-md:pt-[100px] max-md:pb-0 max-md:px-[50px] max-sm:pt-[60px] max-sm:pb-0 max-sm:px-5">
      <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase max-w-[1233px] mb-[100px] max-sm:text-4xl">
        ответы, которые помогут решиться на операцию
      </h2>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};
