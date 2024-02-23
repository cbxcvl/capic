export function Copyright(): JSX.Element {
  return (
    <div className="items-center justify-end pr-6 flex flex-row gap-3">
      <p className="font-sans text-background">© 2024 by</p>
      <a
        className="font-sans uppercase no-underline text-redContent hover:underline"
        href="https://www.github.com/cbxcvl/"
        target="_blank"
      >
        cbxcvl
      </a>
    </div>
  );
}
