import Footer from '../../components/Footer'
import SearchSuggestion from '../../components/SearchSuggestionBar'
import Content from './components/Content'
import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title> Privacy Policy - Zuri Chat</title>
      </Helmet>
      <SearchSuggestion />
      <Content />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
