
import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="flex gap-[100px] relative pt-[200px] pb-0 px-[490px] max-md:flex-col max-md:gap-[60px] max-md:pt-[100px] max-md:pb-0 max-md:px-[50px] max-sm:pt-[60px] max-sm:pb-0 max-sm:px-5">
      <div className="flex-1 max-w-[552px]">
        <div className="relative mb-[50px]">
          <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase max-sm:text-4xl">
            почему я, а не очередной консультант
          </h2>
          <div className="w-[507px] h-[66px] absolute bg-[#0E19C2] rounded-[10px] left-0 -bottom-5" />
        </div>

        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2724df46a0af0ad13097224a14577289796fea8?placeholderIfAbsent=true" 
          alt="Professional expertise illustration" 
          className="w-[498px] h-[296px] mb-10" 
        />

        <div className="flex flex-col gap-10">
          <div className="flex items-start gap-[48px]">
            <div className="flex-shrink-0">
              <div className="w-[59px] h-[59px] bg-[#0E19C2] rounded-full flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.161 6.7776L14.75 2L15.106 6.332C15.547 11.6958 19.8041 15.9531 25.168 16.3939L29.5 16.75L24.8704 17.2573C19.642 17.8303 15.5507 22.0245 15.1078 27.2656L14.75 31.5L14.1553 26.8089C13.5179 21.7806 9.5273 17.8388 4.49169 17.2633L0 16.75L4.1830 16.3914C9.363 15.9474 13.5248 11.9375 14.161 6.7776Z" fill="white" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#F3ECEC] text-[30px] font-normal leading-[36px] mb-[36px]">
                Хирургическая точность
              </h3>
              <p className="text-[#F3ECEC] text-[30px] font-normal leading-[36px]">
                Вижу корневую проблему, а не симптомы. Отличаю реальную боль от фантомных болей роста.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[48px]">
            <div className="flex-shrink-0">
              <div className="w-[59px] h-[59px] bg-[#0E19C2] rounded-full flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.161 6.7776L14.75 2L15.106 6.332C15.547 11.6958 19.8041 15.9531 25.168 16.3939L29.5 16.75L24.8704 17.2573C19.642 17.8303 15.5507 22.0245 15.1078 27.2656L14.75 31.5L14.1553 26.8089C13.5179 21.7806 9.5273 17.8388 4.49169 17.2633L0 16.75L4.1830 16.3914C9.363 15.9474 13.5248 11.9375 14.161 6.7776Z" fill="white" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#F3ECEC] text-[30px] font-normal leading-[36px] mb-[36px]">
                Опыт из окопов
              </h3>
              <p className="text-[#F3ECEC] text-[30px] font-normal leading-[36px]">
                Я сам строил отделы, продавал, отвечал за P&L. Мои советы – не из книжек, а из реальных шрамов.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[48px]">
            <div className="flex-shrink-0">
              <div className="w-[59px] h-[59px] bg-[#0E19C2] rounded-full flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.161 6.7776L14.75 2L15.106 6.332C15.547 11.6958 19.8041 15.9531 25.168 16.3939L29.5 16.75L24.8704 17.2573C19.642 17.8303 15.5507 22.0245 15.1078 27.2656L14.75 31.5L14.1553 26.8089C13.5179 21.7806 9.5273 17.8388 4.49169 17.2633L0 16.75L4.1830 16.3914C9.363 15.9474 13.5248 11.9375 14.161 6.7776Z" fill="white" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#F3ECEC] text-[30px] font-normal leading-[36px] mb-[36px]">
                Психология и AI
              </h3>
              <p className="text-[#F3ECEC] text-[30px] font-normal leading-[36px]">
                Понимаю, как работает голова фаундера и как заставить AI работать на бизнес. Внедряю то, что реально приживется.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1194px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),36px_30px_29.8px_0px_rgba(0,0,0,0.25)_inset] box-border bg-[#0E19C2] p-[50px] rounded-[20px] max-md:max-w-full">
        <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase mb-20 max-sm:text-4xl">
          С какими запросами я работаю
        </h2>

        <div className="flex flex-col gap-[60px]">
          <div className="flex items-start gap-10">
            <div className="flex-shrink-0 mt-[15px]">
              <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[12px] stroke-white stroke-2">
                <path d="M39.6667 6C39.6667 8.94552 42.0545 11.3333 45 11.3333C47.9455 11.3333 50.3333 8.94552 50.3333 6C50.3333 3.05448 47.9455 0.666667 45 0.666667C42.0545 0.666667 39.6667 3.05448 39.6667 6ZM0 6V7H45V6V5H0V6Z" fill="white" />
              </svg>
            </div>
            <p className="text-[#F3ECEC] text-3xl font-normal flex-1 max-sm:text-2xl">
              Построим систему, которая генерирует деньги, а не хаос.
            </p>
          </div>

          <div className="flex items-start gap-10">
            <div className="flex-shrink-0 mt-[15px]">
              <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[12px] stroke-white stroke-2">
                <path d="M39.6667 6C39.6667 8.94552 42.0545 11.3333 45 11.3333C47.9455 11.3333 50.3333 8.94552 50.3333 6C50.3333 3.05448 47.9455 0.666667 45 0.666667C42.0545 0.666667 39.6667 3.05448 39.6667 6ZM0 6V7H45V6V5H0V6Z" fill="white" />
              </svg>
            </div>
            <p className="text-[#F3ECEC] text-3xl font-normal flex-1 max-sm:text-2xl">
              Найдем ту самую точку роста, где минимальные усилия дают максимальный ROI.
            </p>
          </div>

          <div className="flex items-start gap-10">
            <div className="flex-shrink-0 mt-[15px]">
              <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[12px] stroke-white stroke-2">
                <path d="M39.6667 6C39.6667 8.94552 42.0545 11.3333 45 11.3333C47.9455 11.3333 50.3333 8.94552 50.3333 6C50.3333 3.05448 47.9455 0.666667 45 0.666667C42.0545 0.666667 39.6667 3.05448 39.6667 6ZM0 6V7H45V6V5H0V6Z" fill="white" />
              </svg>
            </div>
            <p className="text-[#F3ECEC] text-3xl font-normal flex-1 max-sm:text-2xl">
              Превратим твою интуицию в четкий план с цифрами и сроками.
            </p>
          </div>

          <div className="flex items-start gap-10">
            <div className="flex-shrink-0 mt-[15px]">
              <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[12px] stroke-white stroke-2">
                <path d="M39.6667 6C39.6667 8.94552 42.0545 11.3333 45 11.3333C47.9455 11.3333 50.3333 8.94552 50.3333 6C50.3333 3.05448 47.9455 0.666667 45 0.666667C42.0545 0.666667 39.6667 3.05448 39.6667 6ZM0 6V7H45V6V5H0V6Z" fill="white" />
              </svg>
            </div>
            <p className="text-[#F3ECEC] text-3xl font-normal flex-1 max-sm:text-2xl">
              Сделаем из твоей команды автономный спецназ, а не кружок по интересам.
            </p>
          </div>

          <div className="flex items-start gap-10">
            <div className="flex-shrink-0 mt-[15px]">
              <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[12px] stroke-white stroke-2">
                <path d="M39.6667 6C39.6667 8.94552 42.0545 11.3333 45 11.3333C47.9455 11.3333 50.3333 8.94552 50.3333 6C50.3333 3.05448 47.9455 0.666667 45 0.666667C42.0545 0.666667 39.6667 3.05448 39.6667 6ZM0 6V7H45V6V5H0V6Z" fill="white" />
              </svg>
            </div>
            <p className="text-[#F3ECEC] text-3xl font-normal flex-1 max-sm:text-2xl">
              Вернем тебе время и энергию, чтобы ты снова кайфовал от своего бизнеса, а не был его рабом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
