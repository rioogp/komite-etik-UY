import { createContext, useState, useEffect } from "react";

export const TitleContext = createContext();

function TitleProvider({ children }) {
  const [title, setTitle] = useState(localStorage.getItem("title") || "Berkas");

  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export default TitleProvider;
