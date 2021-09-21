import { useMarketPlaceContext } from '../../../../context/MarketPlace.context'
import { setPluginId } from '../../../../context/marketplace/marketplace.action'
import style from '../../styles/marketplace.module.css'

export const PluginCard = ({ name, id, status, icon_url }) => {
  const marketplace = useMarketPlaceContext()
  //const linkableName = name.split(' ').join('-').toLowerCase()
  //href={`/marketplace/plugins/${id}/${linkableName}`}
  const renderPluginData = () => {
    marketplace.dispatch(setPluginId(id))
  }
  return (
    <div onClick={renderPluginData} className={style.pluginCardContainer}>
      <div className={style.pluginCard} datatype={name}>
        <section className={style.pluginCardTop}>
          <figure className={style.pluginImage}>
            <img src={icon_url} alt={`resource of ${name}`} />
          </figure>
          {status === 'installed' && (
            <span className={style.pluginInstallStatus}>Installed</span>
          )}
        </section>
        <section className={`px-2 ${style.pluginContent}`}>
          <h2 className={`mb-0 ${style.pluginDescription}`}>{name}</h2>
        </section>
      </div>
    </div>
  )
}
