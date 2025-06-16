import React from 'react';
import { TestimonialCard } from './ui/testimonial-card';

export const ClientTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Елена Логачева",
      title: "Экс преподаватель IT MBA в ВШЭ Ментор руководителей",
      image: "/api/placeholder/246/246",
      pointA: "Не было новых клиентов, слабая активность в телеграмм-канале, много приходилось исправлять за командой и было непонятно, куда двигаться дальше",
      pointB: "За 4 месяца работы со мной нашла новый смысл в бизнесе, сформулировала маркетинговую стратегию, наняла эффективную команду и вышла на прибыль >1млн руб",
      link: "t.me/logachevaEQ"
    },
    {
      name: "Кирилл Самородов",
      title: "Основатель AI стартапа",
      image: "/api/placeholder/246/246",
      pointA: "Не было новых клиентов, слабая активность в телеграмм-канале, много приходилось исправлять за командой и было непонятно, куда двигаться дальше",
      pointB: "За 4 месяца работы со мной нашла новый смысл в бизнесе, сформулировала маркетинговую стратегию, наняла эффективную команду и вышла на прибыль >1млн руб",
      link: "artific.me"
    }
  ];

  return (
    <section className="relative pt-[200px] pb-0 px-[499px] max-md:pt-[100px] max-md:pb-0 max-md:px-[50px] max-sm:pt-[60px] max-sm:pb-0 max-sm:px-5">
      <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase mb-10 max-sm:text-4xl">
        бизнесы, которые выросли со мной
      </h2>
      
      <div className="w-[567px] h-16 bg-[#0E19C2] mb-20 rounded-[10px]" />

      <div className="flex gap-[50px] mb-[100px] max-md:flex-col max-md:gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
            pointA={testimonial.pointA}
            pointB={testimonial.pointB}
            link={testimonial.link}
          />
        ))}
        
        <div className="w-[471px] h-[863px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),15px_16px_24.1px_0px_rgba(0,0,0,0.25)_inset] bg-[rgba(87,82,79,0.69)] rounded-[20px]" />
      </div>

      <div className="text-[#F3ECEC] text-3xl font-bold uppercase text-center w-[728px] h-[345px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),20px_24px_25.2px_0px_rgba(0,0,0,0.25)_inset] mt-[-500px] relative z-[3] bg-[#0E19C2] ml-auto rounded-[20px] max-md:w-full max-md:max-w-[600px] max-md:mt-10 max-md:mb-0 max-md:mx-auto flex items-center justify-center">
        сюда надо что-то добавить
      </div>
    </section>
  );
};
