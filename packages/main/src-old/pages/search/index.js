import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactMain from "./components/ContactMain";
import { Helmet } from "react-helmet";

function Search() {
  return (
    <div>
      <Helmet>
        <title>Search Zuri Chat</title>
      </Helmet>
      <Header />
      <ContactMain />
      <Footer showMessage />
    </div>
  );
}

export default Search;
