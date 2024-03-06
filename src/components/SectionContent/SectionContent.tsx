interface ScrollContentProps {
  content: string;
}

export function SectionContent({ content }: ScrollContentProps) {
  return (
    <div className="w-[80%] h-[40%] lg:pl-24 pt-24 lg:w-[100%] ">
      <p className="text-black text-2xl font-medium font-sans text-left md:text-4xl ">
        {content}
      </p>
    </div>
  );
}
