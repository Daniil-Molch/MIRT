import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-black tracking-widest">МИРТ</div>
        <div className="text-gray-500 text-sm text-center md:text-left">
          © 2026 МИРТ. Все права защищены.
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link to="/confidicial" className="hover:text-neon transition-colors">Политика конфиденциальности</Link>
          <Link to="/oplata" className="hover:text-neon transition-colors">Доставка и оплата</Link>
        </div>
      </div>
    </footer>
  );
}