import { Contact } from '../sections/Contact';
import { About } from '../sections/About';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
