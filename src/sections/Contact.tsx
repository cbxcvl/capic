'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';

const ContactLink = dynamic(() =>
  import('../components/ContactLink/ContactLink').then((m) => m.ContactLink),
);

const Logo = dynamic(() =>
  import('../components/Logo/Logo').then((m) => m.Logo),
);

const ContactBadgeContent = dynamic(() =>
  import('../components/ContactBadgeContent/ContactBadgeContent').then(
    (m) => m.ContactBadgeContent,
  ),
);

const Copyright = dynamic(() =>
  import('../components/Copyright/Copyright').then((m) => m.Copyright),
);
import Link from 'next/link';

export const Contact = () => {
  return (
    <section id="contato" className="flex flex-col z-50 relative">
      <LazyMotion features={domAnimation}>
        <div className="w-full absolute overflow-hidden h-[70vh] pt-6 pl-6 lg:p-12 flex bg-black rounded-t-3xl flex-col justify-around">
          <div>
            <ContactBadgeContent content={'(contato)'} />
          </div>
          <div className="w-full">
            <Link
              className="no-underline"
              href={'mailto:capic@proton.me'}
              target="_blank"
            >
              <ContactLink content={'capic@proton.me'} />
            </Link>
            <Link
              className="no-underline"
              href={'https://wa.me/5542988536279'}
              target="_blank"
            >
              <ContactLink content={'+55 42 988 536 279'} />
            </Link>
          </div>
          <div className="w-full h-[5%] flex flex-row items-center justify-between">
            <Link
              className="no-underline flex w-fit h-fit"
              href={'https://www.google.com/'}
              target="_blank"
            >
              <ContactBadgeContent content="instagram" />
            </Link>
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
