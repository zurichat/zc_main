import Footer from "../../components/Footer";
import CareersSection2 from "./components/CareersSection2";
//import CareerGrid from './components/CareerGrid'
// import Section3 from './components/Section3'
import SectionOne from "./components/sectionOne";
import styles from "./styles/sectionOne.module.css";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import "../../i18n";
import { useTranslation } from "react-i18next";

function Careers() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title> {t("careers.title.careers")} - Zuri Chat</title>
      </Helmet>
      <Header />
      <main className={`${styles.grid}`}>
        <SectionOne />
        <CareersSection2 />
      </main>
      <Footer showMessage />
    </div>
  );
}

export default Careers;
