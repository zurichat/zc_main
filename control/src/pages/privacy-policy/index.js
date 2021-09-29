import Footer from '../../components/Footer'
// import SearchSuggestion from '../../components/SearchSuggestionBar'
import Header from '../../components/Header'
import Content from './components/Content'
import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
  return (
    <div>

      <Helmet>
        <title> Privacy Policy - Zuri Chat</title>
      </Helmet>
      <SearchSuggestion />

      <Header />

      <Content />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
