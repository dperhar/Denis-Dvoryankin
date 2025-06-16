
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="relative pt-[200px] pb-[100px] px-[499px] max-md:pt-[100px] max-md:pb-[50px] max-md:px-[50px] max-sm:pt-[60px] max-sm:pb-10 max-sm:px-5">
      <h2 className="text-[#F3ECEC] text-[53px] font-bold uppercase mb-[100px] max-sm:text-4xl">
        запланировать диагностику
      </h2>
      
      <div className="relative">
        <div className="w-[794px] h-[515px] max-md:w-full max-md:max-w-[600px] max-md:h-auto bg-[#F3ECEC] rounded-[20px] p-10">
          <div className="mb-8">
            <h3 className="text-[#333] text-2xl font-bold mb-4">Select a Date & Time</h3>
            <div className="text-[#333] text-lg font-semibold mb-6">AUGUST</div>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <div className="grid grid-cols-7 gap-2 text-center">
                <div className="font-semibold text-gray-600">Пн</div>
                <div className="font-semibold text-gray-600">Вт</div>
                <div className="font-semibold text-gray-600">Ср</div>
                <div className="font-semibold text-gray-600">Чт</div>
                <div className="font-semibold text-gray-600">Пт</div>
                <div className="font-semibold text-gray-600">Сб</div>
                <div className="font-semibold text-gray-600">Вс</div>
                
                <div className="py-2"></div>
                <div className="py-2"></div>
                <div className="py-2"></div>
                <div className="py-2 text-gray-400">1</div>
                <div className="py-2 text-gray-400">2</div>
                <div className="py-2 text-gray-400">3</div>
                <div className="py-2 text-gray-400">4</div>
                
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">5</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">6</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">7</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">8</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">9</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">10</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">11</div>
                
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">12</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">13</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">14</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded bg-blue-500 text-white">15</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">16</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">17</div>
                <div className="py-2 cursor-pointer hover:bg-blue-100 rounded">18</div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#333] font-semibold">Денис Дворянкин</span>
              <span className="text-[#666]">→</span>
            </div>
            
            <div className="mb-4">
              <div className="text-[#333] font-semibold mb-2">Диагностическая сессия</div>
              <div className="text-[#666] text-sm mb-2">90 min</div>
              <div className="text-[#666] text-sm">Zoom</div>
            </div>
            
            <div className="text-[#333] text-sm leading-relaxed">
              2 часа. Без булшита. Найдем корневую проблему вашего бизнеса. 
              50 000 руб. Если не увидите ценности – верну деньги.
            </div>
          </div>
        </div>
        
        <div className="absolute left-[821px] top-[734px] transform rotate-[-44.918deg]">
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[44px] fill-white">
            <path d="M0.523014 0.25966C0.00659988 0.774598 5.91662 22.7965 8.93619 33.7431C11.2103 30.171 15.9393 22.8467 16.6623 22.1257C17.3853 21.4048 26.1717 31.0925 28.7935 34.2918C31.0836 33.0452 35.1196 27.9838 35.1196 27.9838C35.1196 27.9838 27.3764 19.5298 22.9883 15.8178L34.7568 7.99622C23.5607 5.20281 1.03943 -0.255276 0.523014 0.25966Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};
