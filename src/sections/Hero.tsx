'use client';

import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useEffect, useState } from 'react';

const HomeButton = dynamic(() =>
  import('../components/HomeButton/HomeButton').then((m) => m.HomeButton),
);
const MenuLink = dynamic(() =>
  import('../components/MenuLink/MenuLink').then((m) => m.MenuLink),
);
const HeroContent = dynamic(() =>
  import('../components/HeroContent/HeroContent').then((m) => m.HeroContent),
);
const Logo = dynamic(() =>
  import('../components/Logo/Logo').then((m) => m.Logo),
);

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxVariants60 = {
    initial: { y: 0 },
    animate: { y: scrollY * 0.6 },
  };
  const parallaxVariants40 = {
    initial: { y: 0 },
    animate: { y: scrollY * 0.4 },
  };

  return (
    <section
      id=""
      className="flex flex-col w-screen h-screen p-6 lg:p-12 overflow-auto"
    >
      <LazyMotion features={domAnimation}>
        <HomeButton content={'inicio'} />
        <m.div
          className="flex w-full h-full flex-col justify-between"
          variants={parallaxVariants40}
          animate="animate"
        >
          <div className="w-full h-full flex flex-col lg:w-[65%] lg:flex-row lg:items-center lg:self-center lg:justify-center">
            <nav className="flex w-full flex-col mt-36 lg:mt-24">
              <MenuLink content="sobre" anchor="sobre" />
              <MenuLink content="serviços" anchor="servicos" />
              <MenuLink content="contato" anchor="contato" />
            </nav>
            <HeroContent
              content="Capi resolve desafios de visibilidade e vendas com projetos
              personalizados, impulsionando seus resultados."
            />
          </div>
          <m.div
            className="mb-20 lg:mb-0"
            variants={parallaxVariants60}
            animate="animate"
          >
            <Logo content="CAPIC®" />
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
