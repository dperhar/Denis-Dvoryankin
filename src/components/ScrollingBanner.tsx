import React from 'react';

const BannerItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center">
    <div className="text-white text-2xl font-bold uppercase whitespace-nowrap mx-8">{children}</div>
    <div className="text-white text-2xl font-bold">•</div>
  </div>
);

export const ScrollingBanner: React.FC = () => {
  const items = ["ОПЕРАЦИОНКА", "ПРОДАЖИ", "КОМАНДА", "СТРАТЕГИЯ", "МЕТРИКИ", "РОСТ"];

  const renderItems = () => items.map((item, index) => (
    <BannerItem key={index}>{item}</BannerItem>
  ));

  return (
    <div className="w-full h-16 overflow-hidden relative bg-[#4A44F2] flex items-center">
      <div className="flex animate-scroll whitespace-nowrap">
        <div className="flex items-center" >{renderItems()}</div>
        <div className="flex items-center" aria-hidden="true">{renderItems()}</div>
      </div>
    </div>
  );
};
