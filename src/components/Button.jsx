function Button({ children, disabled, type, onClick }) {
  const base =
    "inline-block text-sm rounded-md bg-color-primary font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-color-secondary focus:bg-color-secondary focus:outline-none disabled:cursor-not-allowed capitalize";

  const white =
    "font-bold w-full inline-block text-base rounded-md bg-white font-medium uppercase tracking-wide text-black transition-colors duration-300 hover:bg-slate-200	focus:bg-slate-200 focus:outline-none disabled:cursor-not-allowed my-8 px-4 py-3 md:px-4 md:py-3 capitalize flex items-center justify-center gap-2";

  const styles = {
    primary: base + " px-4 py-3 md:px-4 md:py-4 my-8",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs my-8",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm my-8",
    white: white,
    whiteSmall: white + " w-52 md:w-56 text-lg",
    primaryHome: base + " px-7 py-3 text-[1.1rem] md:text-[1.1rem]",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
