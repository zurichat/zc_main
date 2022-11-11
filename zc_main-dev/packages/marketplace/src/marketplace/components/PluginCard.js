// Styles and Assets
import styles from "../styles/marketplace.module.css";
import zuriChatLogo from "../../component-assets/zurichatlogo.svg";
import DownloadIcon from "../../component-assets/DownloadIcon.svg";

// Components
import { useMarketPlaceContext } from "../../context/MarketPlace.context";
import { setPluginId } from "../../context/marketplace/marketplace.action";

const PluginCard = ({ pluginData, installed, setIsUninstall }) => {
  // MarketPlace Context
  const marketplaceContext = useMarketPlaceContext();

  const trimString = (str, len) => {
    if (str.length <= len) return str;
    return str.slice(0, len) + "...";
  };

  const generateRandomBackgroundHexValue = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    return `hsla(${h}deg, ${s}%, ${l}%, 0.3)`;
  };

  return (
    <div className={styles.pluginCardContainer}>
      <section className={styles.pluginCardTop}>
        <figure
          style={{ backgroundColor: generateRandomBackgroundHexValue() }}
          className={styles.pluginImage}
        >
          <img
            src={pluginData.icon_url}
            onError={e => (e.target.src = zuriChatLogo)}
            alt={`${pluginData.name} icon`}
          />
        </figure>
        <div className={styles.pluginInfo}>
          <h2 className={`mb-0 ${styles.pluginName}`}>{pluginData.name}</h2>
          <h5 className={`mb-0 ${styles.pluginInstallCount}`}>
            <img
              src={DownloadIcon}
              alt="Downloads:"
              style={{ width: "10px" }}
            />
            Downloads: {pluginData.install_count}
          </h5>
          <p className={`mb-0 ${styles.pluginDescription}`}>
            {trimString(pluginData.description, 75)}
          </p>
        </div>
      </section>
      <section className={`px-2 d-flex`}>
        {installed ? (
          <button
            onClick={() => {
              setIsUninstall(true);
              marketplaceContext.dispatch(
                setPluginId(pluginData.id ? pluginData.id : pluginData._id)
              );
            }}
            className={`${styles.pluginButton} ${styles.uninstallPluginBtn}`}
          >
            Uninstall
          </button>
        ) : (
          <button
            onClick={() => {
              setIsUninstall(false);
              marketplaceContext.dispatch(
                setPluginId(pluginData.id ? pluginData.id : pluginData._id)
              );
            }}
            className={styles.pluginButton}
          >
            View
          </button>
        )}
      </section>
    </div>
  );
};

export default PluginCard;
