import Hero from './components/layout/Hero';
import Statistics from './components/layout/Statistics';
import Services from './components/layout/Services';
import About from './components/layout/About';
import Team from './components/layout/Team';
import Testimonials from './components/layout/Testimonials';
import Contact from './components/layout/Contact';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Statistics />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}