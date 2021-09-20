import { RedocStandalone } from 'redoc'
import users from '../user.yaml'

function UsersApi() {
  return (
    <div>
      <RedocStandalone specUrl={users} />
    </div>
  )
}

export default UsersApi
