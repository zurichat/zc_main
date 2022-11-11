import contactStyle from "./ContactMain.module.css";
import { ContactUs } from "../assets";
import FaqSelected from "./FaqSelected";
import DiscoverMore from "./DiscoverMore";
import { useTranslation } from "react-i18next";

const ContactMain = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={`${contactStyle.contactHead} mt-5 mt-lg-3`}>
        <h1>{t("contactHead")}</h1>
        <p>{t("contactHeadP")}</p>
      </div>

      <div className={contactStyle.contactBody}>
        <div className={contactStyle.contactBodyContent}>
          <div className={contactStyle.getHelpCard}>
            <FaqSelected />
          </div>
          <div className={`d-none d-xl-block ${contactStyle.groupImage}`}>
            <img
              className="d-none d-xl-flex"
              src={ContactUs}
              alt="contact us"
            />
          </div>
        </div>
      </div>
      <DiscoverMore />
    </div>
  );
};

export default ContactMain;
