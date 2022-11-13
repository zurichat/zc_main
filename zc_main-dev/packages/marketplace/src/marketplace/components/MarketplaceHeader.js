import headerStyles from "../styles/Header.module.css";
import MarketPlaceIcon from "../../component-assets/marketplace-icon.svg";
import ExternalLink from "../../component-assets/external-link.svg";

const MarketplaceHeader = () => {
  return (
    <div className={headerStyles.marketplace__header}>
      <div className={headerStyles.marketplace__header__title}>
        <img
          src={MarketPlaceIcon}
          alt="MarketPlaceIcon"
          className={headerStyles.marketplace__header__icon}
        />
        <span className={headerStyles.marketplace__header__text}>
          Marketplace
        </span>
      </div>
      <div
        className={headerStyles.marketplace__header__thumbnail}
        onClick={() => {
          const win = window.open("open-marketplace", "_blank");
          win.focus();
        }}
      >
        <div className={headerStyles.marketplace__thumbnail}>
          <img
            src={ExternalLink}
            alt="Open Store"
            className={headerStyles.marketplace__header__icon}
          />
          <span className={headerStyles.marketplace__header__text}>
            Open Store
          </span>
        </div>
      </div>
    </div>
  );
};
export default MarketplaceHeader;
