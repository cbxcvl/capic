'use client';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { BadgeContent } from '../components/BadgeContent/BadgeContent';
import { SectionContent } from '../components/SectionContent/SectionContent';
import { Square } from '../components/Square/Square';

export const About = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    controls1.start(
      inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
    );
  }, [controls1, inView1]);

  useEffect(() => {
    controls2.start(
      inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
    );
  }, [controls2, inView2]);

  return (
    <section id="sobre" className="flex flex-col z-50 relative">
      <LazyMotion features={domAnimation}>
        <div className="sticky top-20 lg:top-36 flex flex-row lg:pl-40">
          <BadgeContent content="(sobre)" />
        </div>
        <div
          ref={ref1}
          className="w-full lg:w-[70%] h-screen pl-6 pt-6 lg:pt-12 flex lg:pl-0 lg:self-center "
        >
          <m.div
            animate={controls1}
            initial={{ opacity: 0.3 * 1.618, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className="flex flex-col "
          >
            <div className="flex justify-end pr-12 md:pr-24 z-50">
              <Square />
            </div>
            <SectionContent content="Sob os valores fundamentais de Inovação e Desenvolvimento, buscamos não apenas criar presenças online, mas redefinir a maneira como a tecnologia impacta positivamente a vida de todos." />
          </m.div>
        </div>
        <div
          ref={ref2}
          className="w-full lg:w-[70%] h-screen pl-6 pt-6 lg:pt-12 flex lg:pl-0 lg:self-center "
        >
          <m.div
            animate={controls2}
            initial={{ opacity: 0.3, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className=" flex-row-reverse"
          >
            <div className="flex justify-start pl-6 md:pl-12 z-50">
              <Square />
            </div>
            <SectionContent content="Aperfeiçoando estratégias online, otimizando sites em plataformas de busca, desenvolvendo soluções de alto desempenho e simplificando processos, construímos um futuro digital confiável, acessível e valioso para todos." />
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
};
