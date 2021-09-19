<<<<<<< HEAD:zc_frontend/src/pages/features/components/Section1.js
import React from 'react';
import styles from '../../features/styles/Features.module.css';
import group from '../../../assets/group.png';
=======
import React from 'react'
import styles from '../../styles/Section1.module.css'
import group from '../../../../assets/image.png'
>>>>>>> 68c0b8959286eaa37c2e5f11ceaf9c8a76d24bd6:zc_frontend/src/pages/features/components/section1/Section1.js

    const Section1 = () => {
                return(
                    <div className={styles.real}>
                      <div className={styles.total}>
                        <div className={styles.feat}>
                            <h2>Zuri Chat Features</h2>
                            <h3>A platform for your <br />team, work and fun.</h3>
                            <p>
                                Build the right connection with your team.
                              Use <br />special features like channels, DMs to
                              complete <br />your work goals. Features like Game
                                rooms and<br /> Music room gets you rejuvenated
                                 while building<br /> healthy relationships with your
                                 team to enhance <br />productivity.
                            </p>
                            <div className={styles.btn}>
                                <button type="button" className={styles.getStarted} onClick={(e) => {e.preventDefault();
                                window.location.replace('https://zuri.chat/signup')}}>Get Started</button>
                                <button type="button" className={styles.features} onClick={(e) => {e.preventDefault();
                                window.location.replace("./components/Section3/#featuresSection")}} >See all Features</button>
                            </div>
                        </div>
                        <div className={group}>
                            <img src={group} alt="group" className={styles.groupImage}/>
                        </div>
                      </div>
                    </div>
    )
}

export default Section1;