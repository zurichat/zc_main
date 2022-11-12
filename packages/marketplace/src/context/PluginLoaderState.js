import { createContext, useState } from "react";

export const PluginLoaderContext = createContext(null);
export const PluginLoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState("init");

  return (
    <PluginLoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </PluginLoaderContext.Provider>
  );
};
