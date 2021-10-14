import React, { useState } from "react"
import styles from "./style/loader.module.css"
import Loader from "react-loader-spinner"
import { ACTIONS } from "../../../App"
const InviteLoaderModal = (props) => {
 

  return (
    props.state.isLoading === true && (
        <div className={styles.modal} >
        <div className={styles.modalcontent} onClick={e => e.stopPropagation()}>
        <Loader
              type="Oval"
              color="#000000"
              thickness="5px"
              speed="0.65s"
              height={90}
              width={50}
              
            />
            <p className={styles.text}>
            Sending Invites...
            </p>
            </div>
            </div>
    )
    )
   
 
}

export default InviteLoaderModal