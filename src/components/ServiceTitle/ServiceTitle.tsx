interface ContentProps {
  content: string;
}

export function ServiceTitle({ content }: ContentProps): JSX.Element {
  return (
    <p className="font-sans font-bold text-base uppercase text-black lg:text-xl">
      {content}
    </p>
  );
}
