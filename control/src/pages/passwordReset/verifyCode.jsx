import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import CodeInput from '../signup/email-verify/codeInput'
import styled from 'styled-components'

export default function VerifyResetCode() {
  const [success, setsuccess] = useState(false)
  const [code, setCode] = useState('')
  const history = useHistory()

  const handleSubmit = async code => {
    try {
      const res = await axios.post(
        'https://api.zuri.chat/account/verify-reset-password',
        {
          code
        }
      )
      setsuccess(true)
      setCode(code)
      console.log(res.data)
    } catch (err) {
      console.error(err)
      setsuccess(false)
    }
  }
  return (
    <Overlay>
      <Content>
        {!success ? (
          <div>
            <h1 style={{ textAlign: 'center' }}>
              Enter the reset code sent to your mail
            </h1>
            <CodeInput
              length={6}
              onComplete={code => {
                handleSubmit(code)
              }}
            />
          </div>
        ) : (
          <Successdiv style={{ textAlign: 'center' }}>
            <img src={okayimage} alt="zurichat logo" className={styles.img} />
            <h2>Reset Code Verification Successful!</h2>
            <p>Click on the Button to continue</p>
            <Button
              onClick={() => history.push(`/change-password?code=${code}`)}
            >
              Continue
            </Button>
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
