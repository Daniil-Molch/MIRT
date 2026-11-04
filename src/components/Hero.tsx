import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm tracking-widest mb-4 uppercase">
              Производство и продажа пакетов, мешков и пленки
            </p>
            <h1 className="text-6xl lg:text-8xl leading-[0.9] mb-8">
              Упаковка <br />
              <span className="text-neon">для бизнеса</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-lg">
              Собственное производство полного цикла. Качество, проверенное на
              каждом этапе.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#contacts" className="bg-neon text-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors">
                Получить расчёт <ArrowRight size={18} />
              </Link>
              <Link
                to="/catalog"
                className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors inline-block text-center"
              >
                Смотреть каталог
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neon rounded-3xl transform rotate-3 scale-105 opacity-20 blur-2xl"></div>
            <img
              src={heroImg}
              alt="Полиэтиленовая пленка"
              className="relative rounded-3xl object-cover w-full h-[500px] shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-10">
          <div>
            <div className="text-4xl font-black text-neon mb-2">15+</div>
            <div className="text-sm text-gray-400">брендов с нами</div>
          </div>
          <div>
            <div className="text-4xl font-black text-neon mb-2">5</div>
            <div className="text-sm text-gray-400">федеральных сетей</div>
          </div>
          <div>
            <div className="text-4xl font-black text-neon mb-2">12</div>
            <div className="text-sm text-gray-400">региональных сетей</div>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            Доставка по всей России 🌍
          </div>
        </div>
      </div>
    </section>
  );
}
