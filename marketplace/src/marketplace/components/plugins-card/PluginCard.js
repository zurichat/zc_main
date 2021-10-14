import { useMarketPlaceContext } from "../../../context/MarketPlace.context"
import { setPluginId } from "../../../context/marketplace/marketplace.action"
import style from "../../styles/marketplace.module.css"
import logo from "../../../component-assets/zurichatlogo.svg"
import DownloadIcon from "../../../component-assets/DownloadIcon.svg"
import { useState, useEffect } from "react"
import axios from "axios"
import { map } from "rxjs"

export const PluginCard = ({
  name,
  id,
  _id,
  status,
  icon_url,
  description,
  install_count
}) => {
  const marketplace = useMarketPlaceContext()
  const [installedPlugins, setInstalledPlugins] = useState([])
  let currentWorkspace = localStorage.getItem("currentWorkspace")
  let token = sessionStorage.getItem("token")

  useEffect(() => {
    mapInstalledPlugins()
  }, [])

  const mapInstalledPlugins = async () => {
    try {
      const response = await axios.get(
        `https://api.zuri.chat/organizations/${currentWorkspace}/plugins`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        const mappedData = data
          .map(plugin => plugin.plugin)
        setInstalledPlugins(mappedData)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const isInstalled = installedPlugins.find(
    plugin => plugin._id === _id 
    // BECAUSE retreivePlugins() OBJECT RETURNS "id" KEY instead of "_id" KEY
    || plugin._id === id
  )

  const renderPluginData = () => {
    marketplace.dispatch(setPluginId(id))
  }

  const trimString = (str, len) => {
    if (str.length <= len) return str
    return str.slice(0, len) + "..."
  }

  const getRandomNumber = maxNum => {
    return Math.floor(Math.random() * maxNum)
  }

  const generateRandomBackgroundHexValue = () => {
    let hexValue
    const h = getRandomNumber(360)
    const s = getRandomNumber(100)
    const l = getRandomNumber(100)

    hexValue = `hsla(${h}deg, ${s}%, ${l}%, 0.22)`
    return hexValue
  }

  const addDefaultImage = e => {
    e.target.src = logo
  }

  return (
    <div className={style.pluginCardContainer}>
      <section className={style.pluginCardTop}>
        <figure
          style={{ backgroundColor: generateRandomBackgroundHexValue() }}
          className={style.pluginImage}
        >
          <img
            src={icon_url}
            onError={addDefaultImage}
            alt={`resource of ${name}`}
          />
        </figure>
        <div className={style.pluginInfo}>
          <h2 className={`mb-0 ${style.pluginName}`}>{name}</h2>
          <h5 className={`mb-0 ${style.pluginInstallCount}`}>
            <img
              src={DownloadIcon}
              alt="Downloads:"
              style={{ width: "10px" }}
            />
            Downloads: {install_count}
          </h5>
          <p className={`mb-0 ${style.pluginDescription}`}>
            {trimString(description, 50)}
          </p>
        </div>
      </section>
      <section
        className={`px-2 d-flex justify-content-end ${style.pluginContent}`}
      >
        {/*<span className={style.pluginInstallRate}>2.5k Installs</p>*/}

        {isInstalled && (
          <button className={style.pluginUninstallButton}>Uninstall</button>
        )}
        {!isInstalled && (
          <button onClick={renderPluginData} className={style.pluginButton}>
            Install
          </button>
        )}
      </section>
    </div>
  )
}
