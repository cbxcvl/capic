import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';

interface HomeButtonProps {
  content: string;
}

export function HomeButton({ content }: HomeButtonProps): JSX.Element {
  return (
    <Link
      href="#"
      className="size-24 lg:size-28 flex fixed items-center justify-start lg:justify-center lg:ml-40 no-underline"
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: -200 }}
          animate={{
            y: 0,
            transition: { stiffness: 500, damping: 60, mass: 1 },
          }}
          whileHover={{ scale: 1.3, x: 20 }}
          whileTap={{ scale: 0.9, x: 20 }}
          className="items-center justify-center"
        >
          <p className="font-sans font-light text-base uppercase text-black">
            {content}
          </p>
        </m.div>
      </LazyMotion>
    </Link>
  );
}
