import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react'

export const MarketPlaceContext = createContext(null)

export const MarketPlaceProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [pluginId, setPluginId] = useState(null)

  const toggleModalState = useCallback(() => {
    if (pluginId !== null) {
      setModal(true)
    } else {
      setModal(false)
    }
  }, [pluginId])

  useEffect(() => {
    toggleModalState()
  }, [pluginId, modal, toggleModalState])

  return (
    <MarketPlaceContext.Provider
      value={{ modal, pluginId, setPluginId, toggleModalState }}
    >
      {children}
    </MarketPlaceContext.Provider>
  )
}

export const useMarketPlaceContext = () => {
  return useContext(MarketPlaceContext)
}
