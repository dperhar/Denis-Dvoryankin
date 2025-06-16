
import React from 'react';

interface EnemyCardProps {
  title: string;
  description: string;
  enemyNumber: string;
}

const EnemyCard: React.FC<EnemyCardProps> = ({ title, description, enemyNumber }) => {
  return (
    <article className="w-[471px] h-[450px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),15px_16px_24.1px_0px_rgba(0,0,0,0.25)_inset] box-border relative bg-[rgba(87,82,79,0.69)] p-[30px] rounded-[20px] max-md:w-full max-md:max-w-[500px] max-md:mx-auto max-md:my-0">
      <div className="text-[#0E19C2] text-[22px] font-bold w-[111px] h-[31px] bg-[#F3ECEC] mb-[20px] rounded-[10px] flex items-center justify-center">
        {enemyNumber}
      </div>
      
      <h3 className="text-[#F3ECEC] text-[32px] font-bold mb-[20px] max-sm:text-[28px]">
        {title}
      </h3>
      
      <p className="text-[#F3ECEC] text-[17px] font-normal leading-[24px]">
        {description}
      </p>
    </article>
  );
};

export const ClientTestimonials: React.FC = () => {
  const enemies = [
    {
      enemyNumber: "Враг #1",
      title: "Операционный Рак",
      description: "Хаос, который незаметно пускает метастазы по компании. Сжирает ресурсы, демотивирует команду и тормозит рост. Вы лечите симптомы, а опухоль растет."
    },
    {
      enemyNumber: "Враг #2", 
      title: "Налог на Фаундера",
      description: "Ситуация, когда каждое решение проходит через тебя. Твой бизнес не может расти быстрее, чем ты отвечаешь в телеграме. Твой отпуск – катастрофа для компании."
    },
    {
      enemyNumber: "Враг #3",
      title: "Имитация Роста", 
      description: "Красивые дашборды, суета в чатах, постоянные созвоны. Все заняты, но деньги в кассе не растут. Это ИБД (имитация бурной деятельности), которая сжигает твой ФОТ и веру в команду."
    }
  ];

  return (
    <section className="relative pt-[200px] pb-0 px-[499px] max-md:pt-[100px] max-md:pb-0 max-md:px-[50px] max-sm:pt-[60px] max-sm:pb-0 max-sm:px-5">
      <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase mb-20 max-sm:text-4xl">
        С чем мы боремся на самом деле
      </h2>

      <div className="flex gap-[50px] flex-wrap justify-center max-md:flex-col max-md:gap-10">
        {enemies.map((enemy, index) => (
          <EnemyCard
            key={index}
            enemyNumber={enemy.enemyNumber}
            title={enemy.title}
            description={enemy.description}
          />
        ))}
      </div>
    </section>
  );
};
