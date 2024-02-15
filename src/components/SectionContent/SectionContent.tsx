import { m } from 'framer-motion';

interface ScrollContentProps {
  content: string;
}

export function SectionContent({ content }: ScrollContentProps) {
  return (
    <div className="w-[80%] h-[40%] pt-24 ">
      <p className="text-black w-fit h-full text-2xl font-medium font-sans text-start scale-[scrollYProgress]">
        {content}
      </p>
    </div>
  );
}
