import { TopNavigationBar, Footer } from "../../../components";

import ContactMain from "./components/ContactMain";

function ContactUs() {
  return (
    <div>
      <TopNavigationBar />
      <ContactMain />
      <Footer showMessage />
    </div>
  );
}

export default ContactUs;
