import Footer from "../../components/Footer"
import Content from "./components/Content"
import { Helmet } from "react-helmet"
import Header from "../../components/Header"

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>{/*  <title> Privacy Policy - Zuri Chat</title> */}</Helmet>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
