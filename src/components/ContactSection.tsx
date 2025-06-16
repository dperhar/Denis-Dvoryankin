import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="relative pt-[200px] pb-[100px] px-[499px] max-md:pt-[100px] max-md:pb-[50px] max-md:px-[50px] max-sm:pt-[60px] max-sm:pb-10 max-sm:px-5">
      <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase mb-[100px] max-sm:text-4xl">
        запланировать встречу
      </h2>
      
      <div className="relative">
        <img 
          src="/api/placeholder/794/515" 
          alt="Meeting scheduling interface" 
          className="w-[794px] h-[515px] max-md:w-full max-md:max-w-[600px] max-md:h-auto" 
        />
        
        <div className="absolute left-[821px] top-[734px] transform rotate-[-44.918deg]">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[44px] fill-white">
            <path d="M0.523014 0.25966C0.00659988 0.774598 5.91662 22.7965 8.93619 33.7431C11.2103 30.171 15.9393 22.8467 16.6623 22.1257C17.3853 21.4048 26.1717 31.0925 28.7935 34.2918C31.0836 33.0452 35.1196 27.9838 35.1196 27.9838C35.1196 27.9838 27.3764 19.5298 22.9883 15.8178L34.7568 7.99622C23.5607 5.20281 1.03943 -0.255276 0.523014 0.25966Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};
