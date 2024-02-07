'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { BadgeContent } from '../components/BadgeContent/BadgeContent';

export const About = () => {
  return (
    <section
      id="sobre"
      className="flex flex-col bg-background z-50 relative rounded-t-3xl"
    >
      <div className="sticky top-20 flex flex-row px-6">
        <BadgeContent content="sobre" />
      </div>
      <LazyMotion features={domAnimation}>
        <div className="w-screen h-screen p-6 lg:p-12">
          <m.p className="text-black w-full ">Sobre 1</m.p>
        </div>
        <div className="w-screen h-screen p-6 lg:p-12">
          <m.p className="text-black w-full ">Sobre 2</m.p>
        </div>
      </LazyMotion>
    </section>
  );
};
