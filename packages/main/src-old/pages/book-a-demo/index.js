import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles/demo-page.module.css";
import DemoForm from "./components/book-demo-form";
import BookDemoImg from "./assets/here-to-help.png";
import DemoSignUp from "./components/demo-signup";

const BookDemo = () => {
  return (
    <>
      <Header />

      <div className={`${styles.demoPage}`}>
        <section className={`${styles.demoIntroduction}`}>
          <div className={`container`}>
            <h1> Let us walk you through it</h1>
          </div>
        </section>
        <section className={`container ${styles.demoFormMain}`}>
          <div className={`${styles.demoFormSection}`}>
            <div className={`${styles.demoFormLeft}`}>
              <DemoForm />
            </div>

            <div className={`${styles.demoFormRight}`}>
              <h4>You'll learn how to:</h4>
              <ul className={`${styles.learnHowToList}`}>
                <li>Organize communication in your team</li>
                <li>
                  Prevent overload of communication and avoid distractions
                </li>
                <li>
                  Maximize the benefits your business can achieve from Zuri
                </li>
                <li>Save up to 3 hours a day</li>
                <li> Migrate from other messaging services</li>
                <li>
                  Adopt smart use cases on managing integrations, tasks,
                  notifications and features for a deadline-driven team
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.otherInfoSection}`}>
          <div className={`container`}>
            <h3>Other information:</h3>
            <ul className={`${styles.otherInfoList}`}>
              <li>
                Demos typically last 30 minutes, but we are flexible and will
                adjust the time based on your needs
              </li>
              <li>
                We do video calls with screen sharing, so most demos happen
                using Whereby or Skype
              </li>
              <li>Zero technical experience is required</li>
              <li>More team members are more than welcome to join</li>
            </ul>
          </div>
        </section>

        <section className={`${styles.demoPageHereToHelpSection}`}>
          <div className={`container`}>
            <div className={`${styles.hereToHelp}`}>
              <div className={`${styles.hereToHelpText}`}>
                <h3>We are always ready to help</h3>
                <p>
                  Got a question? Our 24/7 support team will go the extra mile
                  so you can have easy and enjoyable experience with Zuri.
                </p>
              </div>
              <div className={`${styles.hereToHelpImage}`}>
                <img src={BookDemoImg} alt="help image" />
              </div>
            </div>
          </div>
          <div className={`${styles.helpBackgroundSlash}`}>
            <DemoSignUp />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BookDemo;
