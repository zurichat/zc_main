import React, { useState, useEffect } from 'react'
import { PluginCard } from '../plugins-card/PluginCard'
import registeredPlugins from './data'
import styles from '../../../styles/marketplace.module.css'

const MarketPlaceContainer = () => {
  const [ plugins, setPlugins ] = useState([])

  useEffect(() => {
    setPlugins(registeredPlugins)
  }, [])
  return (
    <div className={styles.zuriMarketPlace__container}>
      {plugins.map((plugin, i) => {
      return <PluginCard key={i} {...plugin} />
    })}
    </div>
    
  )
}

export default MarketPlaceContainer