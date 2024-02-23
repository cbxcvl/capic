'use client';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Importa o hook useInView
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { BadgeContent } from '../components/BadgeContent/BadgeContent';
import { SectionContent } from '../components/SectionContent/SectionContent';
import { Square } from '@/components/Square/Square';

export const Services = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    controls1.start(
      inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
    );
  }, [controls1, inView1]);

  useEffect(() => {
    controls2.start(
      inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
    );
  }, [controls2, inView2]);

  return (
    <section
      id="servicos"
      className="flex flex-col bg-background z-50 relative"
    >
      <div className=" sticky top-20 flex flex-row-reverse pr-12">
        <BadgeContent content="serviços" />
      </div>
      <LazyMotion features={domAnimation}>
        <div ref={ref1} className="w-full h-screen p-6 lg:p-12 flex">
          <m.div
            animate={controls1}
            initial={{ opacity: 0.3 * 1.618, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className="w-full h-full"
          >
            <div className="flex justify-start ml-12">
              <Square />
            </div>
            <SectionContent content="É a representação digital da credibilidade de uma empresa. Fornecendo de maneira concisa história, missão, visão, produtos e serviços, ele se torna central para clientes e parceiros em busca de informações confiáveis. A importância desse espaço virtual? É a solidez que assegura confiança e profissionalismo online" />
          </m.div>
        </div>
        <div ref={ref2} className="w-full h-screen p-6 lg:p-12 flex">
          <m.div
            animate={controls2}
            initial={{ opacity: 0.3, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className="w-full flex-row-reverse h-full"
          >
            <div className="flex justify-end mr-12">
              <Square />
            </div>
            <SectionContent content="Uma landing page poderosa transforma visitantes em clientes, maximiza conversões, capta leads de qualidade, e o principal: impulsiona vendas. Com nosso design impactante e estratégias persuasivas de comunicação, uma simples presença online se transforma numa máquina de resultados" />
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
};
