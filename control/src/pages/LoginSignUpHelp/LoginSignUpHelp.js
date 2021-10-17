import React from "react"
import { Link } from "react-router-dom"
import styles from "./LoginSignUpHelp.module.css"

const LoginSignUpHelp = () => {
  return (
    <div className={`${styles.LoginSignUpHelpCard} container`}>
      <div className="row">
        <div className="col-12 col-md-10 col-xl-8 col-lg-8">
          <div className={styles.LoginHelpMain}>
            {/* Back to Home  */}
            <div className={styles.firstRow}>
              <Link to="/" className={styles.helpLink}>
                <img src="https://img.icons8.com/ios/40/00b87c/left.png" /> Back
                to Home
              </Link>
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

              <span className={styles.ListItemsPara}>
                <p>
                  Check if you're using correct email address and password to
                  login. If you think your account might have been compromised,{" "}
                  <Link to="/reset-password" className={styles.helpLink}>
                    click here to reset your password
                  </Link>{" "}
                  ASAP
                </p>
                <p>
                  Are you using the latest version of ZuriChat mobile or desktop
                  app? Kindly check the current version of your apps. If you're
                  not sure of which version you're using, try{" "}
                  <Link to="/downloads" className={styles.helpLink}>
                    updating or downloading the app
                  </Link>
                </p>
                <p>
                  If the same trouble still persists, kindly uninstall the app,
                  clear your mobile phone's cache and install again.
                </p>
                <p>
                  If you're using a browser, you might have used a wrong
                  password from autocomplete suggestions. We advise you type
                  your ZuriChat email address and password manually again
                </p>
                <p>
                  If all methods above doesn't work, try a new browser or try
                  signing in on incognito mode
                </p>
                <p>
                  Do you have an account with us? If you don't have an account
                  here, you won't be able to login. Go to{" "}
                  <Link to="/signup" className={styles.helpLink}>
                    https://zuri.chat/signup
                  </Link>{" "}
                  to create an account
                </p>
              </span>
            </div>

            {/* Sign-in help */}
            <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
              <h3 className={styles.CSupport}>Unable to Create an Account?</h3>

              <p>
                Okay, if you have problem creating an account, try the
                suggestions below{" "}
              </p>

              <span className={styles.ListItemsPara}>
                <p>
                  Ensure you're using a <strong>Valid email address</strong> and
                  check your email inbox for the authentication code
                </p>
                <p>
                  Use another device or browser to create your account. You can
                  as well clear your browser's cache
                </p>
                <p>
                  Check the network in your area. If the network is good, reload
                  the sign-up page
                </p>
                <p>
                  If you're not receiving authentication code, kindly wait for
                  30 minutes and try again
                </p>
                <p>
                  If you're using ZuriChat mobile or desktop app, update to the
                  latest version or you can{" "}
                  <Link to="/downloads" className={styles.helpLink}>
                    download here
                  </Link>
                </p>
              </span>
            </div>

            {/* Support  */}
            <div className={`${styles.loginHelp} mt-5`} id="SigninHelp">
              <hr />
              <h3 className={styles.CSupport}>Do you still need help?</h3>
              <p>
                If you've tried all the suggestions above but to no avail,
                kindly{" "}
                <Link to="/contact-us" className={styles.ChelpLink}>
                  contact Zuri Customer Service
                </Link>{" "}
                for help.
              </p>
            </div>
          </div>

          {/* end */}
        </div>

        <div className="col-12 col-xl-4 col-lg-4 text-left">
          <div className={styles.LoginHelpSideBar}>
            <h3 className={styles.CSupport}>Related Articles</h3>

            <p>How to Access Workspace</p>
            <p>How to Install a Plugin</p>
            <p>How to set 2FA for Your Account</p>
          </div>

          <div className={`${styles.LoginHelpSideBar} mt-3`}>
            <h3 className={styles.CSupport}>Popular Articles</h3>

            <p>How to Setup Company files Plugin</p>
            <p>How to Use Music Plugin</p>
            <p>How to set Goals for Team </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUpHelp
