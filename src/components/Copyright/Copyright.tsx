export function Copyright(): JSX.Element {
  const handleClick = () => {
    window.open('https://github.com/cbxcvl', '_blank');
  };

  return (
    <div className="items-center justify-end pr-6 flex flex-row gap-3">
      <p className="font-sans text-background">© 2024 by</p>
      <a
        className="font-sans uppercase text-redContent hover:underline visited:text-redContent"
        onClick={handleClick}
      >
        cbxcvl
      </a>
    </div>
  );
}
