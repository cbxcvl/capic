'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../sections/Hero').then((m) => m.Hero));
const About = dynamic(() => import('../sections/About').then((m) => m.About));
const Services = dynamic(() =>
  import('../sections/Services').then((m) => m.Services),
);
const Contact = dynamic(() =>
  import('../sections/Contact').then((m) => m.Contact),
);

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen p-6 xl:p-11 relative">
      <Hero />
    </main>
  );
}
