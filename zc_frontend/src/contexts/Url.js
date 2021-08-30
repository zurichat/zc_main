import { createContext, useState } from 'react'

export const URLContext = createContext(null)
export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState('http://zc-react-todolist-plugin.netlify.app')
  // const [url, setUrl] = useState(null)

  return (
    <URLContext.Provider value={{ setUrl, url }}>
      {children}
    </URLContext.Provider>
  )
}
