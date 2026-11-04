import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  ['/catalog', 'Каталог'], ['/#advantages', 'Преимущества'], ['/#eco', 'Экология'],
  ['/about', 'О компании'], ['/oplata', 'Оплата'], ['/#contacts', 'Контакты'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const items = links.map(([to, label]) => (
    <Link key={to} to={to} onClick={() => setOpen(false)} className="hover:text-neon py-2">{label}</Link>
  ));
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-dark/95 border-b border-white/10"
      onKeyDown={event => { if (open && event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
      <div className="container mx-auto h-20 px-4 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="text-2xl font-black tracking-widest">МИРТ</Link>
        <nav aria-label="Основное меню" className="hidden lg:flex gap-5 text-sm">{items}</nav>
        <div className="flex items-center gap-2">
          <Link to="/#contacts" onClick={() => setOpen(false)} className="bg-neon text-dark px-4 py-2.5 rounded-full font-bold text-sm">Получить расчёт</Link>
          <button id="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen(!open)} className="lg:hidden p-2">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label="Меню на телефоне" hidden={!open} className="lg:hidden border-t border-white/10">
        <div className="container mx-auto px-6 py-3 flex flex-col">{items}</div>
      </nav>
    </header>
  );
}
