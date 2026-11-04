import ldpeImage from '../assets/photos/ldpe.webp';
import hdpeImage from '../assets/photos/hdpe.webp';
import refuseSacksImage from '../assets/photos/refuse-sacks.webp';
import polypropyleneImage from '../assets/photos/polypropylene.webp';
import filmSleeveImage from '../assets/photos/film-sleeve.webp';
import stretchFilmImage from '../assets/photos/stretch-film.webp';
import packingTapeImage from '../assets/photos/packing-tape.webp';
import zipLockImage from '../assets/photos/zip-lock.webp';
import { useEffect, useRef, useState } from 'react';
import { requestLink } from '../contact';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Данные товаров (включая заглушки)
const products = [
  {
    id: 1,
    category: 'Пакеты',
    title: 'Пакеты под заказ из п/э ВД (LDPE)',
    desc: 'Высший и первый сорт. Опции: клапан/скотч, карман для вложения, курьерские, многослойные.',
    details: 'Идеально подходят для упаковки одежды, документов и интернет-заказов. Возможна печать вашего логотипа.',
    img: ldpeImage
  },
  {
    id: 2,
    category: 'Пакеты',
    title: 'Пакеты из п/э НД (HDPE)',
    desc: 'Высший сорт + из плёнки СД. Прочные и экологичные.',
    details: 'Классические фасовочные пакеты ("майки", "фасовка"). Устойчивы к разрывам.',
    img: hdpeImage
  },
  {
    id: 3,
    category: 'Мешки',
    title: 'Мешки для мусора',
    desc: 'Из ВД и НД, в роликах и пластами. Различные объемы от 30 до 260 литров.',
    details: 'С повышенной прочностью, с завязками или ручками. Подходят для офисов и коммунальных служб.',
    img: refuseSacksImage
  },
  {
    id: 4,
    category: 'Пакеты',
    title: 'Пакеты из полипропилена (ПП)',
    desc: 'Клапан + клеевая полоса/лайнер. Многоразовые и одноразовые.',
    details: 'Прозрачные, белые или цветные. Используются для фасовки круп, макарон, бакалеи.',
    img: polypropyleneImage
  },
  {
    id: 5,
    category: 'Плёнка',
    title: 'Плёнки (рукав/полурукав/полотно)',
    desc: 'Из п/э ВД, НД, СД. Без красителя, прокрашенные в массе, из п/п.',
    details: 'С печатью логотипа или без. Широкий спектр применения: от сельского хозяйства до логистики.',
    img: filmSleeveImage
  },
  // Заглушки
  {
    id: 6,
    category: 'Плёнка',
    comingSoon: true,
    title: 'Стрейч-плёнка',
    desc: 'Скоро в наличии. Паллетная и машинная.',
    details: '',
    img: stretchFilmImage
  },
  {
    id: 7,
    category: 'Скотч',
    comingSoon: true,
    title: 'Скотч упаковочный',
    desc: 'Скоро в наличии. Прозрачный и с логотипом.',
    details: '',
    img: packingTapeImage
  },
  {
    id: 8,
    category: 'Пакеты',
    title: 'Зип-лок пакет',
    desc: 'Прозрачный пакет с многоразовой застёжкой.',
    details: 'Пакет закрывается нажатием вдоль застёжки. Его можно открыть и закрыть повторно.',
    img: zipLockImage
  }
];

export default function CatalogPage() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);

  const [params] = useSearchParams();
  const categories = ['Пакеты', 'Плёнка', 'Мешки', 'Скотч'];
  const requested = params.get('category') || '';
  const active = categories.includes(requested) ? requested : '';
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selectedProduct) dialog.current?.showModal();
  }, [selectedProduct]);

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Хлебные крошки */}
        <div className="text-sm text-gray-500 mb-8 font-medium">
          <Link to="/" className="hover:text-neon transition-colors">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-white">Каталог</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-6xl lg:text-8xl font-black uppercase mb-12">Каталог</h1>

        <nav aria-label="Категории товаров" className="flex flex-wrap gap-2 mb-8">
          {['', ...categories].map(category => <Link key={category} aria-current={category === active ? 'page' : undefined}
            className={'rounded-full border px-4 py-2 ' + (category === active ? 'bg-neon text-dark' : 'border-white/30')}
            to={category ? '/catalog?' + new URLSearchParams({ category }) : '/catalog'}>{category || 'Все товары'}</Link>)}
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {products.filter(product => !active || product.category === active).map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`relative bg-white text-dark rounded-2xl overflow-hidden flex flex-col ${!product.comingSoon ? 'cursor-pointer hover:shadow-[0_0_20px_rgba(212,255,63,0.3)] transition-shadow group' : 'opacity-70'}`}
            >
              {/* Картинка */}
              <div className="h-56 bg-gray-100 relative overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Текст */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-black uppercase mb-3 leading-tight">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{product.desc}</p>
                {!product.comingSoon && (
                  <button type="button" aria-label={'Подробнее: ' + product.title} onClick={() => setSelectedProduct(product)} className="font-bold text-sm flex items-center gap-2 after:absolute after:inset-0">
                    Подробнее <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Форма заявки внизу */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4">
              Не нашли нужный размер или цвет?
            </h2>
            <p className="text-gray-400 text-lg">
              Укажите нужные размеры и количество. Менеджер уточнит условия изготовления.
            </p>
          </div>
          <Link to={requestLink('Индивидуальный заказ')} className="bg-neon text-dark px-8 py-3 rounded-full font-bold">Запросить свой размер</Link>
        </div>

      </div>

      <dialog ref={dialog} aria-labelledby="product-name" onClose={() => setSelectedProduct(null)}
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        className="m-auto w-[92vw] max-w-4xl max-h-[85vh] rounded-3xl text-dark backdrop:bg-black/80">
        {selectedProduct && <div className="relative bg-white grid md:grid-cols-2">
          <button autoFocus type="button" aria-label="Закрыть карточку" onClick={() => dialog.current?.close()}
            className="absolute top-3 right-3 p-2 rounded-full bg-white shadow"><X /></button>
          <img src={selectedProduct.img} alt={selectedProduct.title} className="h-56 md:h-full w-full object-cover" />
          <div className="p-7 pt-14">
            <h2 id="product-name" className="text-3xl mb-4">{selectedProduct.title}</h2>
            <p className="mb-6">{selectedProduct.details}</p>
            <Link to={requestLink(selectedProduct.title)} className="inline-block bg-neon px-5 py-3 rounded-full font-bold">Рассчитать стоимость</Link>
          </div>
        </div>}
      </dialog>
    </div>
  );
}
