import Footer from "../../static/legal/components/Footer";
import Content from "../../static/legal/components/Content";
import { Helmet } from "react-helmet";
import Header from "../../static/legal/components/Header";

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
