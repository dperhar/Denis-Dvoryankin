import React from 'react';

const cases = [
  {
    "title": "Трансформация Операционного Хаоса (LATOKEN)",
    "content": "<strong>Проблема:</strong> Команда поддержки из 50 человек в хаосе, косты горят, рейтинги приложений падают.<br><br><strong>Что сделал:</strong><br><ul><li>Пересобрал процессы с нуля, внедрил KPI на основе реального вклада.</li><li>Автоматизировал KYC: <strong>с 3 дней до 30 секунд</strong>.</li><li>Ускорил онбординг команды: <strong>с 2 недель до 3 дней</strong>.</li></ul><strong>Результат:</strong><br><ul><li>Рейтинг App Store <strong>3.2 → 4.9</strong>.</li><li>OpEx на поддержку <strong>-17%</strong>.</li><li>B2B-выручка <strong>+15% Q/Q</strong>.</li></ul>"
  },
  {
    "title": "Прагматичный AI для B2B-Продаж (Loymax)",
    "content": "<strong>Проблема:</strong> Сейлзы тратят десятки часов на рутинные холодные рассылки с околонулевой конверсией.<br><br><strong>Что сделал:</strong><br><ul><li>Проанализировал воронку и нашел узкое место.</li><li>Внедрил систему автоматизированных и персонализированных email-рассылок с использованием AI.</li></ul><strong>Результат:</strong><br><ul><li><strong>Сэкономлено 10+ часов</strong> рабочего времени отдела в неделю.</li><li>Конверсия холодных рассылок <strong>выросла на 40%</strong>.</li><li>Подписано несколько крупных ритейл-клиентов через этот канал.</li></ul>"
  },
  {
    "title": "Ускорение в Корпорации (ВТБ)",
    "content": "<strong>Проблема:</strong> Медленные исследовательские процессы тормозят запуск новых продуктов и сжигают бюджеты.<br><br><strong>Что сделал:</strong><br><ul><li>Перестроил кросс-департаментные воркфлоу.</li><li>Внедрил data-driven подход к планированию (RICE).</li><li>Защитил бюджет в 1.5 раза больше среднего, доказав его ROI.</li></ul><strong>Результат:</strong><br><ul><li>Пропускная способность функции <strong>выросла на 40%</strong>.</li><li>Напрямую <strong>ускорил Time-to-Market</strong> для новых продуктов.</li><li>Снизил риски неудачных запусков.</li></ul>"
  },
  {
    "title": "Предотвращение Стратегической Ошибки (Альфа-Банк)",
    "content": "<strong>Проблема:</strong> Компания была готова сжечь миллионы на проекте, основанном на догадках, а не на данных.<br><br><strong>Что сделал:</strong><br><ul><li>Провел быструю, но глубокую диагностику (CJM, Service Blueprint).</li><li>Собрал неопровержимые данные, что проект не принесет денег.</li><li>Презентовал находки и убедил остановить инвестиции.</li></ul><strong>Результат:</strong><br><ul><li><strong>Сэкономлено XX млн рублей</strong> потенциальных убытков.</li><li>Ресурсы команды были <strong>перенаправлены на прибыльные гипотезы</strong>.</li></ul>"
  }
];

export const RealOperations: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 uppercase">
          Реальные операции, а не презентации
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-[#1E1E1E] p-8 rounded-lg text-left flex flex-col text-gray-300">
              <h3 className="text-2xl font-bold mb-4 uppercase text-white">
                {caseItem.title}
              </h3>
              <div 
                className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: caseItem.content }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 