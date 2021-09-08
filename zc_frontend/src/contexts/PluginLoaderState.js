import { createContext, useState } from 'react'

export const URLContext = createContext(false)
export const PluginLoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false)

  return (
    <URLContext.Provider value={{ loader, setLoader }}>
      {children}
    </URLContext.Provider>
  )
}
