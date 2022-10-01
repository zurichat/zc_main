import React, { useEffect } from "react";
import { TopNavigationBar, Footer, FAQ } from "../../../components";
import Section3 from "./components/Section3";
import Message from "./components/Message";
import { useTranslation } from "react-i18next";
import NewPricingSection from "./components/NewPricingSection";

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem("token", 1234);
    const user = sessionStorage.getItem("token");
    // console.log(user)
  });

  const { t } = useTranslation();

  return (
    <div>
      <TopNavigationBar />
      <NewPricingSection />
      <Section3 />
      <FAQ />
      <Message />
      <Footer showMessage />
    </div>
  );
}
export default Pricing;
