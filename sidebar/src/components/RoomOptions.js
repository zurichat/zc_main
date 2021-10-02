import React from 'react'
import styles from '../styles/ModalComponentStyles.module.css'



const RoomOptions = ({
    isClicked
}) => {
    //   const isOpen = true;


    

    
    return (
        <section className={`${isClicked ? styles.openmodalOptionsCon: styles.modalOptionsCon}`}>
             <div
             className={`d-flex flex-column  ${styles.modalSection}`}
             >
             <p>Change notifications</p>
             <p>Mute channel</p>
             </div>
             <hr className={styles.modalDivider} />
             <div
             className={`d-flex flex-column  ${styles.modalSection}`}
             >
            <p>Mute channel</p>
            <p>Copy link</p>
             </div>
             <hr className={styles.modalDivider} />
             <div
             className={`d-flex flex-column  ${styles.modalSection}`}
             >
             <p>Star channel</p>
             </div>
             <hr className={styles.modalDivider} />
             <div
             className={`d-flex flex-column ${styles.modalSection}`}
             >
             <p>Open conversation details</p>
            <p>Close conversation</p>
             </div>
        </section>
    )
}

export default RoomOptions
