'use client';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { BadgeContent } from '../components/BadgeContent/BadgeContent';
import { SectionContent } from '../components/SectionContent/SectionContent';
import { Square } from '../components/Square/Square';

export const Services = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });

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

  useEffect(() => {
    controls3.start(
      inView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
    );
  }, [controls3, inView3]);

  return (
    <section
      id="servicos"
      className="flex flex-col bg-background z-50 relative"
    >
      <div className=" sticky top-20 lg:top-36 flex flex-row-reverse pr-12 lg:pr-40">
        <BadgeContent content="(serviços)" />
      </div>
      <LazyMotion features={domAnimation}>
        <div
          ref={ref1}
          className="w-full lg:w-[70%] h-screen pl-6 pt-6 lg:pt-12 flex lg:pl-0 lg:self-center "
        >
          <m.div
            animate={controls1}
            initial={{ opacity: 0.3 * 1.618, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className="w-full h-full"
          >
            <div className="flex justify-start ml-12">
              <Square />
            </div>
            <SectionContent content="Adequação Digital: Faça sua Marca se Destacar nas Redes Sociais. Não estamos falando de truques mirabolantes, mas sim de estratégias práticas para conquistar a atenção certa. Vamos moldar suas redes sociais de maneira inteligente para que sua marca seja notada pelo público que realmente importa." />
          </m.div>
        </div>
        <div
          ref={ref2}
          className="w-full lg:w-[70%] h-screen pl-6 pt-6 lg:pt-12 flex lg:pl-0 lg:self-center"
        >
          <m.div
            animate={controls2}
            initial={{ opacity: 0.3, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className="w-full flex-row-reverse h-full"
          >
            <div className="flex justify-end mr-12">
              <Square />
            </div>
            <SectionContent content="Criação de Site: Não Apenas Visual, mas Funcional e Encontrável. Não é só sobre aparência. Nosso foco é criar um site que não só impressiona visualmente, mas que também funcione como uma ferramenta eficiente para ser encontrado nos motores de busca. Conecte-se com quem está procurando exatamente o que você oferece." />
          </m.div>
        </div>
        <div
          ref={ref3}
          className="w-full lg:w-[70%] h-screen pl-6 pt-6 lg:pt-12 flex lg:pl-0 lg:self-center"
        >
          <m.div
            animate={controls3}
            initial={{ opacity: 0.3, scale: 0.9 }}
            transition={{ duration: 0.1 * 1.618 }}
            className="w-full flex-row-reverse h-full"
          >
            <div className="flex justify-end mr-12">
              <Square />
            </div>
            <SectionContent content="Divulgação Estratégica: Campanhas que Geram Resultados Concretos. Não é só propaganda, é estratégia. Desenvolvemos campanhas que não apenas chamam a atenção, mas que geram resultados mensuráveis. Aumente sua visibilidade e impulsione suas promoções de uma forma que você possa ver e sentir." />
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
};
