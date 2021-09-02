import React from 'react'
import style from '../../../styles/marketplace.module.css'

export const PluginCard = ({
  name,
  id,
  description,
  uses,    
  icon_url
}) => {
  const linkableName = name.split(' ').join('-').toLowerCase()
  return (
    <a href={`/marketplace/plugins/${id}/${linkableName}`} className={style.pluginCardContainer}>
      <div className={style.pluginCard} datatype={name}>
      <section className={style.pluginCardTop}>
        <figure
          className={style.pluginImage}          
        >
          <img src={icon_url} alt={`resource of ${name}`} />
        </figure>
        <h2 className={style.pluginDescription}>{name}</h2>
      </section>
      <section className={style.pluginContent}>
        <p>{description}</p>
      </section>      
    </div>
    </a>
    
  )
}
