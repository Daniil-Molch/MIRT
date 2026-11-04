const steps = [
  { num: '01', title: 'Звонок', desc: 'Консультация и подбор продукции' },
  { num: '02', title: 'Заявка', desc: 'Уточняем детали и объем' },
  { num: '03', title: 'Счета', desc: 'Расчёт стоимости и сроков' },
  { num: '04', title: 'Договор', desc: 'Подтверждаем условия' },
  { num: '05', title: 'Изготовление', desc: 'Контроль качества на всех этапах' },
  { num: '06', title: 'Оплата', desc: 'Удобные способы оплаты' },
  { num: '07', title: 'Доставка', desc: 'По всей России или самовывоз в Москве' },
];

export default function Workflow() {
  return (
    <section className="py-24 bg-white text-dark">
      <div className="container mx-auto px-6">
        <p className="text-sm font-bold tracking-widest text-gray-400 mb-4">05 / КАК МЫ РАБОТАЕМ</p>
        <h2 className="text-5xl lg:text-7xl mb-16">Простой процесс <br /> от заявки до доставки</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="w-12 h-12 rounded-full bg-neon flex items-center justify-center font-bold text-dark mb-6 relative z-10">
                {step.num}
              </div>
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-gray-200"></div>
              )}
              <h3 className="text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}