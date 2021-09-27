import { withRouter, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from '../../component-styles/Signout.module.css'
import logo from '../../component-assets/zuri.svg'
import axios from "axios";
import { Modal } from './components/modal';

const InvitePage = () => {
  const { id } = useParams();

  const [email, setemail] = useState('')
  const [orgName, setorgName] = useState('')
  const [enterPassword, setEnterPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [showDialog, setShowDialog] = useState(false)


  const checkIfRegistered = async ({ uuid }) => {
    try {
      const res = await axios.get(
        `https://api.zuri.chat/organizations/invites/${uuid}`
      )
      console.log(res.data.data)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkIfRegistered({ uuid: id }).then((res) => {
      if (res.statusCode === `200`) setTimeout(alert(`Success`), 2000)
      if (res.statusCode === `200`)

        setemail(email)
      setorgName(orgName)
    })
  }, [id])

  return (
    <main id={styles.signout}>
      {enterPassword && <Modal password={password} setPassword={setPassword}/>}
      <div className={styles.logo}>
        <img src={logo} alt="zuri" />
      </div>
      <div className={styles.write}>
        <div className={styles.wrapper}>
          <h1 className={styles.firstText}>
            Join
          </h1>
          <h5 className={styles.secondText}>
            You have been invited to a Workspace
          </h5>
          <button onClick={checkIfRegistered} className={styles.button}>
            Join?
          </button>
        </div>
      </div>
    </main>
  )
}

export default withRouter(InvitePage)
