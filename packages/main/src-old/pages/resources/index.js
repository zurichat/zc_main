import Footer from "../../components/Footer";
import SectionFour from "./components/SectionFour";
import Section1 from "./components/section1";
import Section4 from "./components/section4";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

function Resources() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Helmet>
        <title> Resources - Zuri Chat</title>
      </Helmet>
      <Header />
      <Section1 />
      <Section4 />
      <SectionFour />
      <Footer />
    </div>
  );
}

export default Resources;
