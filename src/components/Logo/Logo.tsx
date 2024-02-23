import { LazyMotion, domAnimation, m } from 'framer-motion';

interface LogoProps {
  content: string;
}

export function Logo({ content }: LogoProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="w-full flex bg-transparent overflow-hidden"
        initial={{ y: 200 }}
        animate={{
          y: 0,
          transition: { stiffness: 200, damping: 30, mass: 1 },
        }}
      >
        <p className="font-sans w-full text-center font-extrabold text-nowrap text-redContent uppercase leading-none text-8xl sm:text-8xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem] ">
          {content}
        </p>
      </m.div>
    </LazyMotion>
  );
}
