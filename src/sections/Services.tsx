'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { BadgeContent } from '../components/BadgeContent/BadgeContent';

export const Services = () => {
  return (
    <section
      id="servicos"
      className="flex flex-col w-screen bg-background z-50 relative rounded-t-3xl"
    >
      <div className="sticky top-20 flex flex-row-reverse px-6">
        <BadgeContent content="serviços" />
      </div>
      <LazyMotion features={domAnimation}>
        <div className="w-screen h-screen p-6 lg:p-12">
          <m.p className="text-black w-full ">Serviço 1</m.p>
        </div>
        <div className="w-screen h-screen p-6 lg:p-12">
          <m.p className="text-black w-full ">Serviço 2</m.p>
        </div>
      </LazyMotion>
    </section>
  );
};
