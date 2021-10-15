import React from "react"
import styles from "./LoginSignUpHelp.module.css"

const LoginSignUpHelp = () => {
  return (
    <div className={`${styles.LoginSignUpHelpCard} container`}>
      <div className="row">
        <div className="col-11">
          {/* Back to Home */}
          <div className={styles.firstRow}>
            <a href="/" className={styles.helpLink}>
              <img src="https://img.icons8.com/ios/40/00b87c/left.png" /> Back
              to Home
            </a>
          </div>

          {/* Login help */}
          <div className={`${styles.loginHelp} mt-2`} id="loginHelp">
            <h3 className={styles.CSupport}>
              Troubleshooting problems signing into ZuriChat
            </h3>

            <p>
              If are having problem signing into your account, the following
              might help you.
            </p>

            <ul className={styles.helpList}>
              <li>
                Check if you're using correct email address and password to
                login. If you think your account might have been compromised,{" "}
                <a href="/reset-password" className={styles.helpLink}>
                  click here to reset your password
                </a>{" "}
                ASAP
              </li>
              <li>
                Are you using the latest version of ZuriChat mobile or desktop
                app? Kindly check the current version of your apps. If you're
                not sure of which version you're using, try{" "}
                <a href="/downloads" className={styles.helpLink}>
                  updating or downloading the app
                </a>
              </li>
              <li>
                If the same trouble still persists, kindly uninstall the app,
                clear your mobile phone's cache and install again.
              </li>
              <li>
                If you're using a browser, you might have used a wrong password
                from autocomplete suggestions. We advise you type your ZuriChat
                email address and password manually again
              </li>
              <li>
                If all methods above doesn't work, try a new browser or try
                signing in on incognito mode
              </li>
              <li>
                Do you have an account with us? If you don't have an account
                here, you won't be able to login. Go to{" "}
                <a href="/signup" className={styles.helpLink}>
                  https://zuri.chat/signup
                </a>{" "}
                to create an account
              </li>
            </ul>
          </div>

          {/* Sign-in help */}
          <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
            <h3 className={styles.CSupport}>Unable to Create an Account?</h3>

            <p>
              Okay, if you have problem creating an account, try the suggestions
              below{" "}
            </p>

            <ul className={styles.helpList}>
              <li>
                Ensure you're using a <strong>Valid email address</strong> and
                check your email inbox for the authentication code
              </li>
              <li>
                Use another device or browser to create your account. You can as
                well clear your browser's cache
              </li>
              <li>
                Check the network in your area. If the network is good, reload
                the sign-up page
              </li>
              <li>
                If you're not receiving authentication code, kindly wait for 30
                minutes and try again
              </li>
              <li>
                If you're using ZuriChat mobile or desktop app, update to the
                latest version or you can{" "}
                <a href="/downloads" className={styles.helpLink}>
                  download here
                </a>
              </li>
            </ul>
          </div>

          {/* Support  */}
          <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
            <hr />
            <h3 className={styles.CSupport}>Do you still need help?</h3>
            <p>
              If you've tried all the suggestions above but to no avail, kindly{" "}
              <a href="/contact-us" className={styles.ChelpLink}>
                contact Zuri Customer Service</a> for help.
            </p>
            <hr />
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  )
}

export default LoginSignUpHelp
