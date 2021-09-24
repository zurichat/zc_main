import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGoogleLogin } from 'react-google-login'

const CLIENT_ID =
  '943002582641-tlnq61fj7bp3jv2fp1qo0hnglmatn2v3.apps.googleusercontent.com'
const GoogleSignIn = ({ className, googleHeader, google }) => {
  const [loading, setLoading] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false)
  const history = useHistory()
  const onSuccess = res => {
    if (googleHeader === 'Sign up with Google') {
      if (buttonClicked) {
        setLoading('Signup successful, redirecting ...')
        console.log('Signup Successful', res)
        history.push('/home')
      }
    } else {
      if (buttonClicked) {
        setLoading('Signin successful, redirecting ...')
        console.log('Signin Successful', res)
        history.push('/home')
      }
    }
  }
  const onFailure = res => {
    console.log(`Login Failed:`, res)
  }
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    isSignedIn: true,
    clientId: CLIENT_ID
  })

  return (
    <div
      className={className}
      onClick={() => {
        setButtonClicked(true)
        if (googleHeader === 'Sign up with Google') {
          setLoading('Signing Up...')
        } else {
          setLoading('Logging In...')
        }

        signIn()
      }}
    >
      <span className="google">
        <img src={google} alt="google" />
        {loading ? loading : googleHeader}
      </span>
    </div>
  )
}

export default GoogleSignIn
