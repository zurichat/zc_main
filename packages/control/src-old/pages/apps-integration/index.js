import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import { Helmet } from "react-helmet";

function AppsAndIntegrations() {
  return (
    <div>
      <Helmet>
        <title>Apps-Integration - Zuri Chat</title>
      </Helmet>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default AppsAndIntegrations;
