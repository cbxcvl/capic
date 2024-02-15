import { m } from 'framer-motion';
import { DownArrow } from '../DownArrow/DownArrow';

export function Square() {
  return (
    <div className="bg-black relative flex items-center justify-center -z-10">
      <m.div
        className="absolute w-[48px] h-[48px] bg-redContent overflow-hidden items-center justify-center flex"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
      ></m.div>
      <m.div
        className=" absolute flex items-center justify-between flex-col"
        initial
        animate={{ y: '50%', rotate: 0 }}
        transition={{
          duration: 1 * 1.618,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <DownArrow />
        <DownArrow />
      </m.div>
    </div>
  );
}
