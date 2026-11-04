import ecologyImage from '../assets/photos/ecology.webp';

export default function Ecology() {
  return (
    <section id="eco" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest text-gray-500 mb-4">04 / ЭКОЛОГИЯ</p>
            <h2 className="text-5xl lg:text-7xl mb-8">
              Забота <br /> <span className="text-neon">о будущем</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg">
              Биоразлагаемая добавка по желанию заказчика — разложение 1–5 лет. Переработка производственных отходов — наш вклад в чистую планету.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="text-5xl font-black text-neon mb-2">1–5</div>
              <div className="text-sm text-gray-400">лет разложение с добавкой</div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="text-5xl font-black text-neon mb-2">100%</div>
              <div className="text-sm text-gray-400">переработка отходов</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <img src={ecologyImage} alt="Экология" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}