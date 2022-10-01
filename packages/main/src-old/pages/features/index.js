import Section4 from "./components/section4/Section4";
import Section6 from "./components/section6/Section6";
import Section3 from "./components/section3/Section3";
import Section2 from "./components/section2/Section2";
import Section1 from "./components/section1/Section1";
import Footer from "../../components/Footer";
import Section5 from "./components/section5/Section5";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
const Features = () => {
  return (
    <>
      <Helmet>
        <title>Features - Zuri Chat</title>
      </Helmet>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
};

export default Features;
