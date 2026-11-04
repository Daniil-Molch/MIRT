import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    const section = document.getElementById(location.hash.slice(1));
    if (section) section.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden selection:bg-neon selection:text-black flex flex-col">
      <Header key={location.key} />
      <main className="flex-grow"><Outlet /></main>
      <Footer />
    </div>
  );
}
