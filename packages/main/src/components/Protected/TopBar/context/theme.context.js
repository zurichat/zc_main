import React, { useContext, useState, createContext, useEffect } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const lightLocal = localStorage.getItem("light") || "";
  const darkLocal = localStorage.getItem("dark") || "";

  const [check, setCheck] = useState({
    light: lightLocal,
    dark: darkLocal
  });

  const [mode, setMode] = useState("light");

  function toggleDarkMode() {
    setCheck({ light: "", dark: "checked" });
    setMode("dark");
  }

  function toggleLightMode() {
    setCheck({ light: "checked", dark: "" });
    setMode("light");
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);

    if (mode === "dark") {
      localStorage.setItem("mode", "dark");
      localStorage.setItem("dark", "checked");
      localStorage.removeItem("light");
      // document.body.style.background = "black"
    } else {
      localStorage.setItem("mode", "light");
      // document.body.style.backgr
      localStorage.setItem("light", "checked");
      localStorage.removeItem("dark");
    }
  }, [mode, check]);

  return (
    <themeContext.Provider value={{ check, toggleLightMode, toggleDarkMode }}>
      {children}
    </themeContext.Provider>
  );
};

export const useGlobalThemeContext = () => {
  return useContext(themeContext);
};
