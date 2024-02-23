'use client';

import { ContactLink } from '../components/ContactLink/ContactLink';
import { Logo } from '../components/Logo/Logo';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ContactBadgeContent } from '@/components/ContactBadgeContent/ContactBadgeContent';
import { Copyright } from '@/components/Copyright/Copyright';

export const Contact = () => {
  return (
    <section id="contato" className="flex flex-col z-50 relative">
      <LazyMotion features={domAnimation}>
        <div className="w-full absolute overflow-hidden h-[70vh] pt-6 pl-6 lg:p-12 flex bg-black rounded-t-3xl flex-col justify-around">
          <div>
            <ContactBadgeContent content={'contato'} />
          </div>
          <div className="w-full">
            <ContactLink content={'capic@proton.me'} />
            <ContactLink content={'+55 42 988 536 279'} />
          </div>
          <div className="w-full h-[5%]">
            <Copyright />
          </div>
          <div className="flex-col">
            <Logo content="CAPIC®" />
          </div>
        </div>
      </LazyMotion>
    </section>
  );
};
