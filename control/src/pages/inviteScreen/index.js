import { withRouter, useParams, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "../../component-styles/Signout.module.css"
import logo from "../../component-assets/zuri.svg"
import axios from "axios"
import { Helmet } from "react-helmet"

const InvitePage = () => {
  const { id } = useParams()
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState("")

  // console.log(id)
  // window.location.hre'

  const checkIfRegistered = async guestId => {
    try {
      const { data } = await axios.get(
        `https://api.zuri.chat/organizations/invites/${id}`
      )

      let validUser = data
      return { validUser, guestId }
    } catch ({ message }) {
      //  put code to redirect to where user would set Password
      // console.log("take me to where i need to put my password")
    }
  }

  useEffect(() => {})

  const history = useHistory()

  const handleJoin = async id => {
    // if (sessionStorage.getItem(`user`) === null) {
    //   sessionStorage.setItem(`workSpaceInviteRedirect`, `invites/${id}`)
    //   history.push(`/login`)
    //   return
    // }

    // function to add user to organization
    const addUserToOrg = async guestId => {
      let { data } = await axios.get(
        `https://api.zuri.chat/organizations/invites/${id}`,
        {}
      )

      return data
    }
    // check user validity and if valid add to ord
    checkIfRegistered(id).then(res => {
      if (res) {
        setsuccess(true)
        // add user to oasyrganizations
        addUserToOrg(res.guestId)
        history.push("/login")
      }
    })
  }

  const handleGoToHome = () => {
    history.push(`home`)
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
          {error && (
            <div className={`alert alert-danger ${styles.error}`}>{error}</div>
          )}
          {!success ? (
            <>
              <h1 className={styles.firstText}>Join</h1>
              <h5 className={styles.secondText}>
                You have been invited to a Workspace
              </h5>
              <button
                onClick={() => handleJoin(id)}
                // onClick={() => history.push('/signup')}
                className={styles.button}
              >
                Join?
              </button>
            </>
          ) : (
            <>
              {/* <h5 className={styles.secondText}>Welcome</h5> */}
              <button onClick={handleGoToHome} className={styles.button}>
                Go to the Workspace Homepage
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default withRouter(InvitePage)
