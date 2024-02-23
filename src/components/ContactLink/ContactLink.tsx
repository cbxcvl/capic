import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';

interface MenuLinkProps {
  content: string;
}

export function ContactLink({ content }: MenuLinkProps): JSX.Element {
  return (
    <a className="no-underline h-12 w-full lg:w-[90%] flex lg:h-[4rem]">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ x: -200 }}
          animate={{
            x: 0,
            transition: { stiffness: 200, damping: 30, mass: 1 },
          }}
          className=" visited:text-current flex h-full w-full justify-center items-center bg-transparent md:w-[70%] "
          whileHover={{
            backgroundColor: 'red',
            scale: 1.0,
            transition: {
              stiffness: 500,
              damping: 60,
              mass: 1,
              delay: 0,
            },
          }}
          whileTap={{
            backgroundColor: 'red',
            x: 0,
            transition: { stiffness: 500, damping: 60, mass: 1, delay: 0 },
          }}
        >
          <m.p
            className="w-full no-underline text-nowrap flex h-full items-center font-normal font-sans text-4xl lg:text-7xl xl:text-7xl text-background"
            whileHover={{
              scale: 1.3,
              color: `black`,
              x: 70,
            }}
            whileTap={{
              scale: 1.3,
              color: `black`,
              x: 70,
            }}
          >
            {content}
          </m.p>
        </m.div>
      </LazyMotion>
    </a>
  );
}
