import { createContext, useState } from "react";

export const URLContext = createContext(null);
export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState(null);

  return (
    <URLContext.Provider value={{ url, setUrl }}>
      {children}
    </URLContext.Provider>
  );
};
