import Footer from "../../components/Footer";
import Content from "./components/Content";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";

const TermsCondition = () => {
  return (
    <div>
      <Helmet>
        <title> Terms And Conditions - Zuri Chat</title>
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default TermsCondition;
