interface ContentProps {
  content: string;
}

export function BadgeContent({ content }: ContentProps): JSX.Element {
  return (
    <div className="top-20 size-24 lg:size-28 items-center justify-start flex pl-6 lg:pl-12 ">
      <p className="font-sans font-semibold text-base uppercase text-black">
        {content}
      </p>
    </div>
  );
}
