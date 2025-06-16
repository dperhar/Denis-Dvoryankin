import React from 'react';

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  pointA: string;
  pointB: string;
  link: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  image,
  pointA,
  pointB,
  link
}) => {
  return (
    <article className="w-[471px] h-[863px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),15px_16px_24.1px_0px_rgba(0,0,0,0.25)_inset] box-border relative bg-[rgba(87,82,79,0.69)] p-[30px] rounded-[20px] max-md:w-full max-md:max-w-[500px] max-md:mx-auto max-md:my-0">
      <img 
        src={image} 
        alt={`${name} profile photo`}
        className="w-[246px] h-[246px] mb-[23px] rounded-[123px]" 
      />
      
      <h3 className="text-[#F3ECEC] text-[40px] font-bold mb-[11px] max-sm:text-[32px]">
        {name}
      </h3>
      
      <p className="text-[#F3ECEC] text-[17px] font-normal mb-[62px]">
        {title}
      </p>

      <div className="mb-[30px]">
        <div className="text-[#F3ECEC] text-[22px] font-bold w-[111px] h-[31px] bg-[#0E19C2] mb-[11px] rounded-[10px] flex items-center justify-center">
          Точка А
        </div>
        <p className="text-[#F3ECEC] text-[17px] font-normal">
          {pointA}
        </p>
      </div>

      <div className="mb-[30px]">
        <div className="text-[#F3ECEC] text-[22px] font-bold w-[111px] h-[31px] bg-[#0E19C2] mb-[11px] rounded-[10px] flex items-center justify-center">
          Точка Б
        </div>
        <p className="text-[#F3ECEC] text-[17px] font-normal">
          {pointB}
        </p>
      </div>

      <div className="w-[3px] h-44 absolute bg-[#0E19C2] left-[30px] top-[423px]" />
      
      <a 
        href={`https://${link}`}
        className="text-[#F3ECEC] text-[17px] font-light underline absolute left-[30px] bottom-[30px] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </article>
  );
};
