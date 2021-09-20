import { RedocStandalone } from 'redoc'
import auth from '../auth.yaml'

function AuthApi() {
  return (
    <div>
      <RedocStandalone specUrl={auth} />
    </div>
  )
}

export default AuthApi
