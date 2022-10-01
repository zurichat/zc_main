import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OnboardHelp from "../LoginSignUpHelp/LoginSignUpHelp";
import { Helmet } from "react-helmet";
import "../../i18n";
import { useTranslation } from "react-i18next";

const OnboardingHelp = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("auth.onboardingHelp.title")} - Zuri Chat</title>
      </Helmet>
      <Header />
      <OnboardHelp className="mt-10" />
      <Footer />
    </div>
  );
};

export default OnboardingHelp;
