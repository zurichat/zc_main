import React, { useState } from 'react'
import authBg from '../../pages/images/backg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
// import axios from 'axios'

const Index = () => {
  const [email, setEmail] = useState('')

  return (
    <main id={styles.authPageWrapper}>
      <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={authBg} alt="backgroundImage" />
          <div id={styles.aside_txt}></div>
        </div>
      </aside>
      <section id={styles.authFormContainer}>
        <FormWrapper
          header="Recover Password"
          subHeader="Don't fret! Fill in the details, and your account wil be all yours again."
          email={email}
          // handleSubmit={handleSubmit}
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name="Email address"
            type="email"
            placeholder="Johndoe@example.com"
            value={email}
            setValue={setEmail}
            error=""
          />
          <div
            style={{
              margin: '20px 0'
            }}
          ></div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Index)
