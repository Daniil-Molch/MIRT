import { PaymentPage, PrivacyPage } from './pages/InfoPages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="confidicial" element={<PrivacyPage />} />
          <Route path="oplata" element={<PaymentPage />} />
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;