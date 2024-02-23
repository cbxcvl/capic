interface ContentProps {
  content: string;
}

export function ContactBadgeContent({ content }: ContentProps): JSX.Element {
  return (
    <div className="items-center justify-start flex">
      <p className="font-sans font-semibold text-base text-nowrap uppercase text-background">
        ({content})
      </p>
    </div>
  );
}
