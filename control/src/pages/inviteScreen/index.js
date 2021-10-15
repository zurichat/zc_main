import { withRouter, useParams, useHistory } from "react-router-dom"
import { useState} from "react"
import styles from "../../component-styles/Signout.module.css"
import logo from "../../component-assets/zuri.svg"
import axios from "axios"
import { Helmet } from "react-helmet"

const InvitePage = () => {
  const { id: inviteId } = useParams()
  const history = useHistory()
  const [registerNewUser, setRegisteNewrUser] = useState(false)
  const [userPasswordValue, setUserPasswordValue] = useState("")

  // check if user has a zuri account
  const handleJoinWorkspace = async () => {
    try {
      // user exist on zuri chat
      const { data } = await axios.get(
        `https://api.zuri.chat/organizations/invites/${inviteId}`
      )
      addUserToOrganization()
    } catch ({ message }) {
      // user does not exist on zuri chat
      console.error("handleJoinWorkspace-err", message)
      setRegisteNewrUser(true)
    }
  }

  // create a new user
  const registerNewUserHandler = async () => {
    try {
      const { data } = await axios.post("https://api.zuri.chat/guests/invite", {
        uuid: inviteId,
        password: userPasswordValue
      })
      addUserToOrganization()

    } catch ({ message }) {
      console.error("registerNewUserHandler-err", message)
    }
  }

  // add user to the organization

  const addUserToOrganization = async () => {
    try {
      const { data } = await axios.post(
        `https://api.zuri.chat/organizations/guests/${inviteId}`,
        {}
      )
      
      history.replace("/login")
    } catch ({ message }) {
      console.error("addUserToOrganization-err", message)
      history.replace("/login")
    }
  }

  return (
    <main id={styles.signout}>
      <Helmet>
        <title>InviteScreen - Zuri Chat</title>
      </Helmet>
      <div className={styles.logo}>
        <img src={logo} alt="zuri" />
      </div>
      <div className={styles.write}>
        <div className={styles.wrapper}>
          <>
            <h1 className={styles.firstText}>Join</h1>
            <h5 className={styles.secondText}>
              You have been invited to a Workspace
            </h5>
            <button
              onClick={() => {
                if (registerNewUser) {
                  registerNewUserHandler()
                } else {
                  handleJoinWorkspace()
                }
              }}
              // onClick={() => history.push('/signup')}
              className={styles.button}
              disabled={registerNewUser && !userPasswordValue}
            >
              Join?
            </button>
          </>
          {registerNewUser && (
            <input
              value={userPasswordValue}
              onChange={evt => setUserPasswordValue(evt.target.value)}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default withRouter(InvitePage)
