import { LazyMotion, domAnimation, m } from 'framer-motion';

interface LogoProps {
  content: string;
}

export function Logo({ content }: LogoProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="w-full flex pt-[70px] md:pt-[90px] lg:pt[60px] "
        initial={{ y: 200 }}
        animate={{ y: 0, transition: { stiffness: 200, damping: 30, mass: 1 } }}
      >
        <p className="font-sans font-extrabold text-nowrap text-redContent uppercase leading-none text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] ">
          {content}
        </p>
      </m.div>
    </LazyMotion>
  );
}
