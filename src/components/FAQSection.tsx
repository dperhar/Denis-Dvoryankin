import React from 'react';

const faqs = [
  {
    "question": "Нахуя ты, если есть ChatGPT?",
    "answer": "ChatGPT даст тебе идеальный план, еще и фреймворков насыпет. Я помогу тебе его внедрить в реальность, где есть люди, сопротивление и саботаж. AI не умеет работать с человеческим фактором. Я умею."
  },
  {
    "question": "Чем ты отличаешься от моего COO?",
    "answer": "Ваш СОО тушит пожары. Я проектирую систему, в которой пожары не случаются. У меня нет операционной загрузки и политических обязательств. Моя единственная лояльность – к результату."
  },
  {
    "question": "Это коучинг или консалтинг?",
    "answer": "Это интеллектуальный спарринг с внедрением. Я буду задавать вопросы как коуч, диагностировать как консультант и требовать результат как партнер."
  },
  {
    "question": "С кем ты не работаешь?",
    "answer": "С теми, кто ищет \"руки\" для своих задач. С теми, кто не готов к неудобной правде. С теми, кто считает, что проблема в ком-то другом, а не в системе."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-center text-4xl font-bold mb-12 uppercase">
          Неудобные вопросы. Честные ответы.
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
