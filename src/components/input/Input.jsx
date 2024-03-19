function Input({ type, placeholder }) {
  if (type === "checkbox") return <input type={type} className="w-6 h-6 " />;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border text-sm border-gray-300 rounded-md py-2.5 px-4 mb-4 focus:outline-none focus:border-gray-400"
    />
  );
}

export default Input;
