import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGoogleLogin } from 'react-google-login'

const CLIENT_ID = '943002582641-ek6jakave3irmueaqfdoc0754v83qf6e.apps.googleusercontent.com'
const GoogleAuth = ({ className, googleHeader, google, setLoading }) => {
    const [buttonClicked, setButtonClicked] = useState(false)
    const history = useHistory()
    const onSuccess = (res) => {
        if (googleHeader === 'Sign up with Google') {

            if (buttonClicked) {
                // Logic for sign up goes here
            }

        } else {
            if (buttonClicked) {
                setLoading(true)

                setTimeout(() => {
                history.push('/choose-workspace')
                setLoading(false)
                }, 2000)

                console.log('Signin Successful',res.tokenObj.access_token)
            }
        }

    }
    const onFailure = (res) => {
        console.log(`Login Failed:`, res)
    }
    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        isSignedIn: true,
        clientId: CLIENT_ID
    })

    return (
        <div className={className} onClick={() => {
            setButtonClicked(true)
            signIn();
        }
        }>
            <a className="google">
                <img src={google} alt="google" />
                {googleHeader}
            </a>
        </div>

    )
}

export default GoogleAuth