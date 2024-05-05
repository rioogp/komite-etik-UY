import { createContext, useState, useEffect } from "react";

export const TitleContext = createContext();

function TitleProvider({ children }) {
  const [title, setTitle] = useState(localStorage.getItem("title") || "Berkas");

  const setValTitle = (title) => {
    setTitle(title);
    localStorage.setItem("title", title);
  };

  return (
    <TitleContext.Provider value={{ title, setValTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export default TitleProvider;
