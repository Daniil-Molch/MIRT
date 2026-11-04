import { Factory, ShieldCheck, Settings, Clock, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <Factory />, title: 'Собственное производство', desc: 'Полный цикл изготовления.' },
  { icon: <ShieldCheck />, title: 'ГОСТ и сертификация', desc: 'ГОСТ 10354-82, ГОСТ 50962-96. Сертифицированная продукция.' },
  { icon: <Settings />, title: 'Современное оборудование', desc: 'Немецкое и итальянское оборудование. Сырье от ПАО «Казаньоргсинтез», «Ставролен».' },
  { icon: <Clock />, title: 'Минимальные сроки и цены', desc: 'От 5000 ₽. Самовывоз или любая ТК. Бесплатная доставка по Москве от 35 000 ₽.' },
  { icon: <Leaf />, title: 'Экологичный подход', desc: 'Биоразлагаемая добавка (1–5 лет) и переработка производственных отходов.' },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-gray text-dark">
      <div className="container mx-auto px-6">
        <p className="text-sm font-bold tracking-widest text-gray-400 mb-4">02 / ПРЕИМУЩЕСТВА</p>
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <h2 className="text-5xl lg:text-7xl">Почему <br /> МИРТ?</h2>
          <p className="text-gray-500 lg:col-span-2 text-lg">
            Мы контролируем качество на всех этапах — от сырья до доставки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-neon transition-colors"
            >
              <div className="text-neon mb-6">{item.icon}</div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}