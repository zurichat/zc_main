import { RedocStandalone } from 'redoc'
import organization from '../organization.yaml'

function OrganisationApi() {
  return (
    <div>
      <RedocStandalone specUrl={organization} />
    </div>
  )
}

export default OrganisationApi
