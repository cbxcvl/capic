import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface MenuLinkProps {
  content: string;
  anchor: string;
}

export function MenuLink({ content, anchor }: MenuLinkProps): JSX.Element {
  function scrollToSection(anchor: string) {
    const section = document.querySelector(anchor);
    if (section) {
      section.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  }

  return (
    <Link
      href={`#${anchor}`}
      onClick={() => scrollToSection(anchor)}
      className="no-underline h-12 w-full lg:w-[90%] flex lg:h-[4rem] "
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ x: -200 }}
          animate={{
            x: 0,
            transition: { stiffness: 200, damping: 30, mass: 1 },
          }}
          className=" flex h-full w-full justify-center items-center bg-transparent md:w-[60%]"
          whileHover={{
            backgroundColor: 'red',
            scale: 1.0,
            transition: { stiffness: 500, damping: 60, mass: 1, delay: 0 },
          }}
          whileTap={{
            backgroundColor: 'red',
            x: 0,
            transition: { stiffness: 500, damping: 60, mass: 1, delay: 0 },
          }}
        >
          <m.p
            className=" w-full flex h-full text-center items-center font-normal font-sans uppercase text-5xl lg:text-6xl xl:text-7xl text-black"
            whileHover={{
              scale: 1.3,
              color: `rgb(var(--background-end-rgb))`,
              x: 70,
            }}
            whileTap={{
              scale: 1.3,
              color: `rgb(var(--background-end-rgb))`,
              x: 70,
            }}
          >
            {content}
          </m.p>
        </m.div>
      </LazyMotion>
    </Link>
  );
}
