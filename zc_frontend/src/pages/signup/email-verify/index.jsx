import axios from 'axios'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import paperplane from '../../../assets/auth_images/paperplane.svg'
import okayimage from '../../../assets/auth_images/okayimage.svg'
import styles from './styles/EmailVerification.module.css'
import CodeInput from './codeInput'
import { Button } from '../../../components/verified-components'

export default function EmailVerification({ email = 'johndoe@example.com' }) {
  const [success, setsuccess] = useState(false)

  const handleSubmit = async code => {
    await axios
      .post(`url for the email verification`, {
        verificationCode: code
      })
      .then(_res => {
        setsuccess(true)
        console.log(success)
      })
      .catch(err => {
        setsuccess(false)
        console.log(err)
      })
    setsuccess(true)
  }

  const goHome = () => {
    window.location.href = '/home'
  }

  return (
    <Overlay>
      <Content>
        {!success ? (
          <div className={styles.main}>
            <img src={paperplane} alt="paper plane" className={styles.img} />
            <h4>Check your email for your code !</h4>
            <p className={styles.enterCode}>
              Enter the 6-digit code sent to you at{' '}
              <a href={`mailto:${email}`} className={styles.email}>
                {email}
              </a>
              . This code expires shortly so be quick
            </p>
            <div>
              <CodeInput
                length={6}
                onComplete={code => {
                  handleSubmit(code)
                }}
              />
            </div>

            <div style={{ marginBlock: '2rem' }}>
              <p style={{ textAlign: 'center' }}>Code expired?</p>
              <Link to="/home" className={styles.request} disabled>
                Click here to request a new code!
              </Link>
            </div>

            <p>
              Already have an Account? <br />
              <Link to="/login" className={styles.request}>
                Use Password to sign in
              </Link>
            </p>
          </div>
        ) : (
          <Successdiv style={{ textAlign: 'center' }}>
            <img src={okayimage} alt="zurichat logo" className={styles.img} />
            <h2>Email Verification Succesful!</h2>
            <p>Click on the Button to continue</p>
            <Button onClick={goHome}>Continue</Button>
          </Successdiv>
        )}
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 10rem;
`
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`
const Successdiv = styled.div`
  & > h2,
  & > p {
    color: #242424;
  }
  & > h2 {
    font-style: bold;
    font-weight: 700;
    font-size: 25px;
    line-height: 48px;
    line-height: 160%;
  }
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    line-height: 103%;
  }
`
