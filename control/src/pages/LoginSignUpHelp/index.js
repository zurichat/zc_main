import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import OnboardHelp from "../LoginSignUpHelp/LoginSignUpHelp"
import { Helmet } from "react-helmet"

const OnboardingHelp = () => {
  return (
    <div>
      <Helmet>
        <title> Troubleshooting Problems - Zuri Chat</title>
      </Helmet>
      <Header />
      <OnboardHelp className="mt-10" />
      <Footer />
    </div>
  )
}

export default OnboardingHelp
