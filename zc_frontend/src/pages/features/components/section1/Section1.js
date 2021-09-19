import styles from '../../styles/Section1.module.css'
// import group from '../../../../assets/image.png'

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
                            <img src={`/feature_hero_image.png`} alt="group" className={styles.groupImage}/>
                        </div>
                      </div>
                    </div>
    )
}

export default Section1;