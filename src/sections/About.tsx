'use client';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import dynamic from 'next/dynamic';

const BadgeContent = dynamic(() =>
  import('../components/BadgeContent/BadgeContent').then((m) => m.BadgeContent),
);
const SectionContent = dynamic(() =>
  import('../components/SectionContent/SectionContent').then(
    (m) => m.SectionContent,
  ),
);
const Square = dynamic(() =>
  import('../components/Square/Square').then((m) => m.Square),
);

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
        <div className="sticky top-20 flex flex-row lg:pl-12">
          <BadgeContent content="(sobre)" />
        </div>
        <div
          ref={ref1}
          className="h-screen lg:w-[70%] pl-6 pt-6 lg:pl-12 lg:pt-12 flex lg:self-center "
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
            <SectionContent content="Somos dedicados a revolucionar experiências online, elevando o padrão do desenvolvimento web e priorizando a satisfação do cliente. Com expertise em web design, desenvolvimento, UI/UX e design de produto, nossa distinção vai além do técnico, destacando-se pela transformação da visão digital em realidade." />
          </m.div>
        </div>
        <div
          ref={ref2}
          className="w-full h-screen pl-6 pt-6 lg:pl-12 lg:pt-12 flex"
        >
          <m.div
            animate={controls2}
            initial={{ opacity: 0.3, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className=" flex-row-reverse"
          >
            <div className="flex justify-start ml-12">
              <Square />
            </div>
            <SectionContent content="Cada projeto é uma oportunidade única para superar expectativas, criando soluções digitais inovadoras e impactantes, desde elegantes sites até interfaces, sempre com o foco centrado no usuário." />
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
};
