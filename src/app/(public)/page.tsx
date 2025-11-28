import { Clients } from '@/components/Pages/Home/Clients';
import Contact from '@/components/Pages/Home/Contact';
import Features from '@/components/Pages/Home/Features';
import Hero from '@/components/Pages/Home/Hero';
import Marketing from '@/components/Pages/Home/Marketing';
import Services from '@/components/Pages/Home/Services';
import WhyChooseUs from '@/components/Pages/Home/WhyChooseUs';

export default function Home() {
  return (
    <div className="min-h-screen overflow-clip">
      <Hero />
      <Features />
      <WhyChooseUs />
      <Services />
      <Clients />
      <Marketing />
      <Contact />
    </div>
  );
}
