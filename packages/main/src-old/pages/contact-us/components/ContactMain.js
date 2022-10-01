import contactStyle from "../styles/contactMain.module.css";
import ContactUs from "./ContactUsImg.svg";
import FAQselected from "./FAQSelected.js";
import DiscoverMore from "./DiscoverMore";

const contactTitle = () => {
  return (
    <div>
      <div className={`${contactStyle.contactHead} mt-5 mt-lg-3`}>
        <h1>Contact Us</h1>
        <p>
          We are dedicated to making your online communication experience with
          us a pleasure We’d like to hear from you.
        </p>
      </div>

      <div className={contactStyle.contactBody}>
        <div className={contactStyle.contactBodyContent}>
          <div className={contactStyle.getHelpCard}>
            <FAQselected />
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

export default contactTitle;
