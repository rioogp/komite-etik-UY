function OutlinedButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white text-white rounded-md px-4 py-2 transition duration-300 ease-in-out  hover:text-slate-200 hover:border-slate-200 text-lg"
    >
      {children}
    </button>
  );
}

export default OutlinedButton;
