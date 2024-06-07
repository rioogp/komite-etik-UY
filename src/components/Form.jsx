function Form({ type, onSubmit, children }) {
  const regularStyles = "flex flex-col w-full h-auto px-10 py-14 overflow-auto";
  const modalStyles =
    "w-full flex flex-col justify-between gap-2 px-5 md:px-10 pb-5";
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
