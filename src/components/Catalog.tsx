import { Link } from 'react-router-dom';
import categoryBagsImage from '../assets/photos/category-bags.webp';
import categoryFilmImage from '../assets/photos/category-film.webp';
import categorySacksImage from '../assets/photos/category-sacks.webp';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Пакеты',
    desc: 'Фасовочные, с ручками и с застёжкой зип-лок',
    img: categoryBagsImage
  },
  {
    title: 'Плёнка',
    desc: 'Полиэтиленовая термоусадочная стрейч-плёнка',
    img: categoryFilmImage
  },
  {
    title: 'Мешки',
    desc: '120 л / 180-200 л / 240-260 л (в пластах)',
    img: categorySacksImage
  }
];

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 bg-white text-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-sm font-bold tracking-widest text-gray-400 mb-4">01 / ПРОДУКЦИЯ</p>
            <h2 className="text-5xl lg:text-7xl">Наш каталог</h2>
          </div>
          <p className="text-gray-500 max-w-sm mt-6 md:mt-0">
            Пакеты, мешки и плёнка для упаковки и хранения.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl mb-4">{item.title}</h3>
                <p className="text-gray-500 mb-8">{item.desc}</p>
                <Link to={'/catalog?' + new URLSearchParams({ category: item.title })} className="inline-flex items-center gap-2 font-bold hover:text-neon transition-colors">
                  Перейти <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}