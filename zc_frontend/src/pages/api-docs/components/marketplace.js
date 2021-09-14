import { RedocStandalone } from 'redoc'
import marketplace from '../marketplace.yaml'

function MarketplaceApi() {
  return (
    <div>
      <RedocStandalone specUrl={marketplace} />
    </div>
  )
}

export default MarketplaceApi
