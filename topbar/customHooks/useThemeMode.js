import { useEffect, useState } from "react"

export default () => {
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

  return {
    theme,
    toggleTheme
  }
}
