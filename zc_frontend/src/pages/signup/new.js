import { useState } from 'react'

import AuthInputBox from '../../components/AuthInputBox'
import AuthFormWrapper from '../../components/AuthFormWrapper'

const SignUp = () => {
  const [name, setname] = useState('')

  return (
    <AuthFormWrapper>
      <AuthInputBox
        id="name"
        name="Full Name"
        type="text"
        placeholder="Enter your name"
        value={name}
        setValue={setname}
        error="Sorry, this email does not exist. Try again or click Create an account to sign up with us."
      />
    </AuthFormWrapper>
  )
}

//export default SignUp
