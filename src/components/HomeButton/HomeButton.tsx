import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';

interface HomeButtonProps {
  content: string;
}

export function HomeButton({ content }: HomeButtonProps): JSX.Element {
  return (
    <Link href="#">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: -200 }}
          animate={{
            y: 0,
            transition: { stiffness: 500, damping: 60, mass: 1 },
          }}
          whileHover={{ scale: 1.3, x: 20 }}
          whileTap={{ scale: 0.9, x: 20 }}
          className="size-24 flex items-center fixed"
        >
          <p className="font-sans font-light text-base uppercase">{content}</p>
        </m.div>
      </LazyMotion>
    </Link>
  );
}
