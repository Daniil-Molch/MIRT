import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import Advantages from '../components/Advantages';
import Ecology from '../components/Ecology';
import Workflow from '../components/Workflow';
import Delivery from '../components/Delivery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <Advantages />
      <Ecology />
      <Workflow />
      <Delivery />
      <ContactForm />
    </>
  );
}