import contactStyle from "../styles/contactMain.module.css";
import ContactUs from "./ContactUsImg.svg";
import FAQselected from "./FAQSelected.js";
import DiscoverMore from "./DiscoverMore";

const contactTitle = () => {
  return (
    <div>
      <div className={`${contactStyle.contactHead} mt-5 mt-lg-3`}>
        <h1>Search</h1>
        <p>Search for anything you want on ZuriChat</p>
      </div>

      <div className={contactStyle.contactBody}>
        <div className={contactStyle.getHelpCard}>
          <FAQselected />
        </div>

        <img className="d-none d-xl-flex" src={ContactUs} alt="contact us" />
      </div>
      <DiscoverMore />
    </div>
  );
};

export default contactTitle;
