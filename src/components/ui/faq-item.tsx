import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="h-[41px] bg-[#0E19C2] mb-5 rounded-[10px]" />
        <h3 className="text-[#F3ECEC] text-3xl font-bold absolute z-[2] mb-5 left-0 top-[5px] max-sm:text-2xl">
          {question}
        </h3>
      </button>
      
      {isOpen && (
        <div className="mt-[60px] animate-in slide-in-from-top-2 duration-200">
          <p className="text-[#F3ECEC] text-xl font-normal leading-[34px] max-w-[1292px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};
