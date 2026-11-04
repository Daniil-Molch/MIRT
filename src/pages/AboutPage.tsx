import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Хлебные крошки */}
        <div className="text-sm text-gray-500 mb-8 font-medium">
          <Link to="/" className="hover:text-neon transition-colors">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-white">О компании</span>
        </div>

        {/* Заголовок */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl lg:text-8xl font-black uppercase mb-6"
        >
          О компании
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl lg:text-3xl text-gray-400 font-medium mb-16 max-w-3xl"
        >
          Рады видеть вас на нашей странице!
        </motion.p>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Левая колонка - Текст */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              Наша компания основана в <span className="text-neon font-bold">2001 году</span>.
            </p>
            <p>
              За это время мы добились значительных успехов на рынке продукции, изготавливаемой из плёночных полиэтиленов и полипропиленов. Это пакеты и мешки всевозможных форматов, и, собственно, плёнка.
            </p>
            
            {/* Блок-цитата */}
            <div className="border-l-4 border-neon pl-6 py-2 my-8">
              <p className="text-white font-semibold italic text-xl">
                «Мы гордимся успехами наших заказчиков, тех, кто использует в своем производственном цикле нашу продукцию».
              </p>
            </div>
          </motion.div>

          {/* Правая колонка - Визуальные акценты (Карточки со статистикой) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* Карточка 1: Год основания */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center justify-between">
              <div>
                <div className="text-gray-400 mb-2 uppercase tracking-wider text-sm font-bold">Год основания</div>
                <div className="text-6xl font-black text-neon">2001</div>
              </div>
            </div>

            {/* Карточка 2: Опыт */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="text-gray-400 mb-2 uppercase tracking-wider text-sm font-bold">Опыт работы</div>
              <div className="text-6xl font-black text-white">{new Date().getFullYear() - 2001}+ <span className="text-3xl text-gray-500">лет</span></div>
              <p className="text-gray-400 mt-4 text-sm">Успешной работы на рынке упаковки</p>
            </div>

            {/* Карточка 3: Продукция */}
            <div className="bg-neon text-dark p-8 rounded-3xl">
              <div className="text-dark/60 mb-2 uppercase tracking-wider text-sm font-bold">Наша специализация</div>
              <div className="text-2xl font-black leading-tight">
                Пакеты, мешки и плёнка из полиэтилена и полипропилена
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}