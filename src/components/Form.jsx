function Form({ type = "regular", onSubmit, children }) {
  const regularStyles =
    "flex flex-col w-full h-auto px-12 py-16 md:px-24 overflow-scroll";
  const modalStyles = "w-full flex flex-col justify-between gap-5";
  const baseStyles = "overflow-hidden text-base";

  return (
    <form
      className={`${
        type === "regular" ? regularStyles : modalStyles
      } ${baseStyles}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
