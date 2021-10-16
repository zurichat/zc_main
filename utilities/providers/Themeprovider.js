import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext()

export default props => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = arg => {
    setTheme(arg)
    localStorage.setItem("theme", arg)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [theme])

  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>
}
