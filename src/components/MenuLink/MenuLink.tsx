import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface MenuLinkProps {
  content: string;
  anchor: string;
}

export function MenuLink({ content, anchor }: MenuLinkProps): JSX.Element {
  return (
    <Link
      href={`#${anchor}`}
      className="no-underline h-12 w-full flex lg:h-14 "
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ x: -200 }}
          animate={{
            x: 0,
            transition: { stiffness: 200, damping: 30, mass: 1 },
          }}
          className=" flex h-full justify-center items-center bg-transparent "
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
            className=" w-80 lg:w-96 flex h-full rounded-none text-center items-center font-sans font-light uppercase text-5xl lg:text-6xl text-black"
            whileHover={{
              scale: 1.3,
              color: `rgb(var(--background-end-rgb))`,
              x: 50,
            }}
            whileTap={{
              scale: 1.3,
              color: `rgb(var(--background-end-rgb))`,
              x: 50,
            }}
          >
            {content}
          </m.p>
        </m.div>
      </LazyMotion>
    </Link>
  );
}
