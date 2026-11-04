import deliveryImage from '../assets/photos/delivery.webp';
import { Truck, ShieldCheck, FileText } from 'lucide-react';

export default function Delivery() {
  return (
    <section className="py-24 bg-gray text-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest text-gray-400 mb-4">06 / ДОСТАВКА И ГАРАНТИИ</p>
            <h2 className="text-5xl lg:text-7xl mb-12">Надёжная доставка и гарантия качества</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <Truck className="text-neon shrink-0" size={28} />
                <div>
                  <h3 className="text-xl mb-1">Доставка по всей России</h3>
                  <p className="text-gray-500 text-sm">Любая ТК, самовывоз в Москве.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="text-neon shrink-0" size={28} />
                <div>
                  <h3 className="text-xl mb-1">Гарантия качества</h3>
                  <p className="text-gray-500 text-sm">Сертификаты и соответствие ГОСТ.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="text-neon shrink-0" size={28} />
                <div>
                  <h3 className="text-xl mb-1">Вся документация</h3>
                  <p className="text-gray-500 text-sm">Паспорт качества, сертификаты.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={deliveryImage} 
              alt="Доставка" 
              className="rounded-3xl object-cover w-full h-[400px]"
            />
            <div className="absolute bottom-6 right-6 bg-dark text-white p-6 rounded-2xl">
              <div className="text-3xl font-black text-neon">100%</div>
              <div className="text-xs">соответствие ГОСТ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}