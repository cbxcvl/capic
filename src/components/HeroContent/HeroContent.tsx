import { LazyMotion, domAnimation, m } from 'framer-motion';

interface HeroContentProps {
  content: string;
}

export function HeroContent({ content }: HeroContentProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ x: 200 }}
        animate={{ x: 0, transition: { stiffness: 200, damping: 30, mass: 1 } }}
        className="w-full h-60 flex items-center pt-5 text-wrap "
      >
        <p className="font-sans leading-none text-2xl text-wrap md:w-[80%] lg:w-[70%]">
          {content}
        </p>
      </m.div>
    </LazyMotion>
  );
}
