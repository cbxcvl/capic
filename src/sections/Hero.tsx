'use client';

import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useEffect, useState } from 'react';

import { HomeButton } from '../components/HomeButton/HomeButton';
import { MenuLink } from '../components/MenuLink/MenuLink';
import { HeroContent } from '../components/HeroContent/HeroContent';
import { Logo } from '../components/Logo/Logo';

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
    <section id="" className=" flex flex-col overflow-hidden">
      <LazyMotion features={domAnimation}>
        <div className="pl-6 pt-6 lg:pl-12 lg:pt-12">
          <HomeButton content={'inicio'} />
        </div>
        <m.div
          className="flex w-full h-screen pl-6 pt-6 lg:pl-12 lg:pt-12 flex-col justify-between"
          variants={parallaxVariants40}
          animate="animate"
        >
          <div className="w-full h-full flex flex-col lg:w-[65%] lg:flex-row lg:items-center lg:self-center lg:justify-center lg:gap-2">
            <nav className=" w-full flex flex-col mt-36 lg:mt-24">
              <MenuLink content="sobre" anchor="sobre" />
              <MenuLink content="serviços" anchor="servicos" />
              <MenuLink content="contato" anchor="contato" />
            </nav>
            <HeroContent content="Potencializando marcas através da criatividade, comunicação e tecnologia." />
          </div>
          <m.div
            className="pb-24 lg:pb-0"
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
