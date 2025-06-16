import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="w-full h-[1121px] relative flex items-start justify-between box-border bg-[#57524F] pt-[90px] pb-0 px-[499px] max-md:flex-col max-md:h-auto max-md:min-h-[800px] max-md:pt-[60px] max-md:pb-0 max-md:px-[50px] max-sm:pt-10 max-sm:pb-0 max-sm:px-5">
      <div className="absolute w-full h-full bg-[#57524F] left-0 top-0" />
      
      <div className="relative z-[2] flex flex-col items-start gap-5">
        <div className="flex items-center gap-5 mb-[274px]">
          <div className="flex items-center gap-5">
            <h1 className="text-[#F3ECEC] text-3xl font-extrabold max-sm:text-2xl">
              Денис Перхáр
            </h1>
            <img 
              src="/api/placeholder/45/45" 
              alt="Profile icon" 
              className="w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]" 
            />
            <img 
              src="/api/placeholder/89/89" 
              alt="Business icon" 
              className="w-[89px] h-[89px] max-sm:w-[60px] max-sm:h-[60px]" 
            />
          </div>
        </div>

        <div className="relative w-[824px] mb-[292px] max-md:w-full max-md:mb-10">
          <h2 className="text-[#F3ECEC] text-[53px] font-bold leading-[71.55px] tracking-[1.06px] uppercase max-md:text-[40px] max-sm:text-[28px]">
            Консультирую предпринимателей, готовых к росту бизнеса
          </h2>
          <div className="w-[541px] h-[62px] absolute bg-[#0E19C2] rounded-[10px] right-0 bottom-0 max-md:w-full max-md:max-w-[400px]" />
        </div>

        <button className="relative w-[307px] h-[78px] bg-[#0E19C2] rounded-[10px] hover:bg-[#0D15A8] transition-colors">
          <span className="absolute -translate-x-2/4 -translate-y-2/4 text-white text-center text-3xl font-bold leading-[40.5px] tracking-[0.6px] uppercase left-2/4 top-2/4 max-sm:text-2xl">
            ускориться
          </span>
        </button>
      </div>

      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2889e8dc903ef6af00a37fa55becf4e13afcdc3?placeholderIfAbsent=true" 
        alt="Denis Perkhar professional photo" 
        className="w-[1022px] h-[1049px] absolute right-0 top-[72px] max-md:relative max-md:w-full max-md:max-w-[600px] max-md:h-auto max-md:mt-10 max-md:right-auto max-md:top-auto max-sm:max-w-full" 
      />
    </header>
  );
};
