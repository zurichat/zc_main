import { createContext, useState } from 'react'

export const PluginContext = createContext(null)
export const PluginProvider = ({ children }) => {
  const [plugins, setPlugins] = useState(null)

  return (
    <PluginContext.Provider value={{ plugins, setPlugins }}>
      {children}
    </PluginContext.Provider>
  )
}
