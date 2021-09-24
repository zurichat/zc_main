import { useState } from 'react'
import CodeInput from '../signup/email-verify/codeInput.jsx'

export default function VerifyResetCode() {
  const [success, setsuccess] = useState(false)

  const handleSubmit = async code => {
    try {
      const res = await axios.post(
        `https://api.zuri.chat/account/verify-reset-password`,
        {
          code: code
        }
      )
      setsuccess(true)
      console.log(res.data)
    } catch (err) {
      console.error(err)
      setsuccess(false)
    }
    // setsuccess(true)
  }
  return (
    <div>
      <h1>Enter the reset code sent to your mail</h1>
      <CodeInput
        length={6}
        onComplete={code => {
          handleSubmit(code)
        }}
      />
    </div>
  )
}
