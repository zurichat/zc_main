import React from 'react';
import styles from '../styles/OptionsPopUp.module.css'

const OptionsPopUp = (props) => {
    return (
        <div ref={props.ref}>
            <div className={styles.popup} >
                <div className={styles.popupInner}>

                    <button onClick={props.toggleModal}>X</button>
                    <ul style={{ listStyle: 'none' }}>
                        <li>Activate Account</li>
                        <li>Change Account Type</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OptionsPopUp
