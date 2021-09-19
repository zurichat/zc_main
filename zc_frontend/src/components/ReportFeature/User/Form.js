import React, { useState } from 'react'
import AdminSetup from './AdminSetup'
import ComplaintProfiles from './ComplaintProfiles'
import { Confirm } from './Confirm'
import Success from './Success'
import styles from './reports.module.css'

export const UserForm = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [offence, setOffence] = useState('Anti Semitism')
  const [description, setDescription] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [postSuccess, setPostSuccess] = useState(true)

  const nextStep = () => {
    const steps = step
    setStep(steps + 1)
  }

  const prevStep = () => {
    const steps = step
    setStep(steps - 1)
  }

  const inputChange = input => e => {
    if (input === 'anonymous') {
      setAnonymous(e.target.checked)
      // console.log(input, e.target.checked);
    }
    if (input === 'email') {
      setEmail(e.target.value)
    }
    if (input === 'offence') {
      setOffence(e.target.value)
    }
    if (input === 'description') {
      setDescription(e.target.value)
    }
    // console.log(input, e.target.value);
  }

  const setPostSucc = response => {
    setPostSuccess(response)
  }

  const values = { email, offence, description, anonymous, postSuccess }

  return (
    <div className={styles}>
      {step === 1 ? (
        <AdminSetup
          nextStep={nextStep}
          inputChange={inputChange}
          values={values}
        />
      ) : null}
      {step === 2 ? (
        <ComplaintProfiles
          nextStep={nextStep}
          prevStep={prevStep}
          inputChange={inputChange}
          values={values}
        />
      ) : null}
      {step === 3 ? (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          setPostSucc={setPostSucc}
          values={values}
        />
      ) : null}
      {step === 4 ? <Success postSucc={postSuccess} /> : null}
    </div>
  )
}
export default UserForm
