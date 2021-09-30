import { useMarketPlaceContext } from '../../../../context/MarketPlace.context'
import { setPluginId } from '../../../../context/marketplace/marketplace.action'
import style from '../../styles/marketplace.module.css'
import logo from '../../../../component-assets/zurichatlogo.svg'

export const PluginCard = ({ name, id, status, icon_url, description }) => {
  const marketplace = useMarketPlaceContext()
  const renderPluginData = () => {
    marketplace.dispatch(setPluginId(id))
  }

  const trimString = (str, len) => {
    if (str.length <= len) return str;
    return str.slice(0, len) + '...';
  }

  const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

  const generateRandomBackgroundHexValue = () => {
    let hexValue;
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
  
    hexValue = `hsla(${h}deg, ${s}%, ${l}%, 0.22)`;
    return hexValue;
  } 

  const addDefaultImage = (e) => {
    e.target.src = logo
  }

  return (
    <div className={style.pluginCardContainer}>      
      <section className={style.pluginCardTop}>
        <figure style={{ backgroundColor: generateRandomBackgroundHexValue()}} className={style.pluginImage}>
          <img src={icon_url} onError={addDefaultImage} alt={`resource of ${name}`} />
        </figure>
        <div className={style.pluginInfo}>
          <h2 className={`mb-0 ${style.pluginName}`}>{name}</h2>  
          <p className={`mb-0 ${style.pluginDescription}`}>{trimString(description, 150)}</p>
        </div>
      </section>
      <section className={`px-2 d-flex justify-content-end ${style.pluginContent}`}>
        {/*<span className={style.pluginInstallRate}>2.5k Installs</p>*/}
        <button onClick={renderPluginData} className={style.pluginButton}>Install</button>
      </section>      
    </div>
  )
}
