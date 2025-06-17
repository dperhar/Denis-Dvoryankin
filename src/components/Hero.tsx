
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="w-full h-[1121px] relative flex items-start justify-between box-border bg-[#57524F] pt-[90px] pb-0 px-[499px] max-md:flex-col max-md:h-auto max-md:min-h-[800px] max-md:pt-[60px] max-md:pb-0 max-md:px-[50px] max-sm:pt-10 max-sm:pb-0 max-sm:px-5">
      <div className="absolute w-full h-full bg-[#57524F] left-0 top-0" />
      
      <div className="relative z-[2] flex flex-col items-start gap-5">
        <div className="flex items-center gap-5 mb-[274px]">
          <div className="flex items-center gap-5">
            <h1 className="text-[#F3ECEC] text-3xl font-extrabold max-sm:text-2xl">
              Денис Дворянкин
            </h1>
            <a href="https://t.me/deperhar" target="_blank" rel="noopener noreferrer">
              <img 
                src="/lovable-uploads/1fafdfff-e5a9-4eec-8d26-d69e1b5c572b.png" 
                alt="Telegram" 
                className="w-6 h-6" 
              />
            </a>
            <a href="https://linkedin.com/in/dperhar-discovery/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/lovable-uploads/cd2e400b-10af-440e-9c60-41d90ff37414.png" 
                alt="LinkedIn" 
                className="w-6 h-6" 
              />
            </a>
          </div>
        </div>

        <div className="relative w-[824px] mb-[292px] max-md:w-full max-md:mb-10">
          <h2 className="text-[#F3ECEC] text-[53px] font-bold leading-[71.55px] tracking-[1.06px] uppercase max-md:text-[40px] max-sm:text-[28px]">
            СТРОЮ СИСТЕМЫ, КОТОРЫЕ ПРИНОСЯТ ДЕНЬГИ БЕЗ ВАС
          </h2>
          <div className="w-[541px] h-[62px] absolute bg-[#0E19C2] rounded-[10px] right-0 bottom-0 max-md:w-full max-md:max-w-[400px]" />
        </div>

        <button className="relative w-[307px] h-[78px] bg-[#0E19C2] rounded-[10px] hover:bg-[#0D15A8] transition-colors">
          <span className="absolute -translate-x-2/4 -translate-y-2/4 text-white text-center text-3xl font-bold leading-[40.5px] tracking-[0.6px] uppercase left-2/4 top-2/4 max-sm:text-2xl">
            ПОЧИНИТЬ СИСТЕМУ
          </span>
        </button>
      </div>

      <img 
        src="/lovable-uploads/dff2e6ef-cc45-4551-b424-e9de5d6ce4be.png" 
        alt="Денис Дворянкин professional photo" 
        className="w-[1022px] h-[1049px] absolute right-0 top-[72px] max-md:relative max-md:w-full max-md:max-w-[600px] max-md:h-auto max-md:mt-10 max-md:right-auto max-md:top-auto max-sm:max-w-full" 
      />
    </header>
  );
};
