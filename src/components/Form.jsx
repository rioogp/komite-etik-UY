function Form({ type, onSubmit, children }) {
  const regularStyles =
    "flex flex-col w-full h-auto px-12 py-16 md:px-24 overflow-auto";
  const modalStyles = "w-full flex flex-col justify-between gap-5";
  const baseStyles = "text-base";

  return (
    <form
      className={`${
        type === null ? "" : type === "regular" ? regularStyles : modalStyles
      } ${baseStyles}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
