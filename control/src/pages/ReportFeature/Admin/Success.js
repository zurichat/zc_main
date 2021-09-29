import React, { useEffect } from 'react'
import styles from './reports.module.css'

export const Success = props => {
  useEffect(() => {
    return () => {
      props.resetStep()
    }
  })

  return (
    <section className={`${styles.formcontainer}`}>
      {props.postSucc ? (
        <div>
          <h1 className={`text-success `}>
            <b>Successful!</b>
          </h1>

          <span className="text-success">Penalty Authorized</span>
        </div>
      ) : (
        <div>
          <h1 className={`text-danger `}>
            <b>Unsuccessful!</b>
          </h1>
          <p className="text-danger">Your complaint failed to be reported</p>
        </div>
      )}
    </section>
  )
}

export default Success
