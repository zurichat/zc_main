import React, { useEffect } from "react";
import Header from "../../components/Header";
import Section3 from "./components/Section3";
import Footer from "../../components/Footer";
import FAQ from "../FAQ";
import Message from "./components/Message";
import "../../i18n";
import { useTranslation } from "react-i18next";
import NewPricingSection from "./pricingPageSection1/NewPricingSection";
// import Section4PricingPage from "./components/Section4_pricing_page"
// import PricingPageSection1 from "./pricingPageSection1/PricingPageSection1"

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem("token", 1234);
    const user = sessionStorage.getItem("token");
    // console.log(user)
  });

  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <NewPricingSection />
      <Section3 />
      <FAQ />
      <Message />
      <Footer showMessage />
    </div>
  );
}
export default Pricing;
