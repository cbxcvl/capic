import { LazyMotion, domAnimation, m } from 'framer-motion';

interface HeroContentProps {
  content: string;
}

export function HeroContent({ content }: HeroContentProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ x: 200 }}
        animate={{
          x: 0,
          transition: { stiffness: 200, damping: 30, mass: 1 },
        }}
        className="w-full lg:w-[40%] h-fit flex bg-transparent mt-20 "
      >
        <p className="w-full font-sans leading-none font-semibold text-[1.75rem]  text-wrap text-left ">
          {content}
        </p>
      </m.div>
    </LazyMotion>
  );
}
