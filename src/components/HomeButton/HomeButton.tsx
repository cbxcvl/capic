import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';

interface HomeButtonProps {
  content: string;
}

export function HomeButton({ content }: HomeButtonProps): JSX.Element {
  return (
    <div className=" flex fixed items-center justify-start lg:justify-center lg:ml-40  z-[999]">
      <LazyMotion features={domAnimation}>
        <m.div className="size-24 lg:size-28 items-center justify-start flex">
          <Link href={'#'} className="no-underline">
            <m.p
              initial={{ y: -200 }}
              animate={{
                y: 0,
                transition: { stiffness: 500, damping: 60, mass: 1 },
              }}
              whileHover={{ scale: 1.3, x: 20 }}
              whileTap={{ scale: 1.3, x: 20 }}
              className="font-sans font-semibold text-base uppercase text-black"
            >
              {content}
            </m.p>
          </Link>
        </m.div>
      </LazyMotion>
    </div>
  );
}
