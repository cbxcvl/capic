import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface MenuLinkProps {
  content: string;
  anchor: string;
  pt?: string;
}

export function MenuLink({ content, anchor, pt }: MenuLinkProps): JSX.Element {
  return (
    <Link href={`#${anchor}`}>
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ x: -200 }}
          animate={{
            x: 0,
            transition: { stiffness: 200, damping: 30, mass: 1 },
          }}
          className={`w-[272px] h-[48px] ${pt ? 'mt-24 mb-2' : 'mt-2'} `}
          whileHover={{
            scale: 1.0,
            backgroundColor: 'red',
            x: 0,
            transition: { stiffness: 500, damping: 60, mass: 1, delay: 0 },
          }}
          whileTap={{
            backgroundColor: 'red',
            x: 0,
            transition: { stiffness: 500, damping: 60, mass: 1, delay: 0 },
          }}
        >
          <m.button
            className="w-80 flex h-full rounded-none items-center font-light uppercase text-5xl"
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
          </m.button>
        </m.div>
      </LazyMotion>
    </Link>
  );
}
