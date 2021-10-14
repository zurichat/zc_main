import React from 'react';
import styles from '../styles/OptionsPopUp.css'

const OptionsPopUp = (props) => {
    return (
        <div ref={props.ref}>
            <div className='popup' >
                <div className='popup_inner'>

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
