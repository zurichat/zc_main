import React from 'react'
import styles from '../styles/MarkAsRead.module.css'


const MarkAsRead = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.firstSection}>
                    <h5>When i view a channel:</h5>
                    <form action="">
                        <div>
                            <input type="radio" name="view-channel"
                                value="Start me where i left off and mark the channel read"
                            />
                            <label htmlFor="Start me where i left off and mark the channel read">
                                Start me where i left off and mark the channel read
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="view-channel"
                                value="Start me at the newest message and amrk the channel read"
                                checked />
                            <label htmlFor="Start me at the newest message and amrk the channel read">
                                Start me at the newest message and amrk the channel read
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="view-channel"
                                value="Start me at the newest message but leave unseen messages unread"
                            />
                            <label htmlFor="Start me at the newest message but leave unseen messages unread">
                                Start me at the newest message but leave unseen messages unread
                            </label>
                        </div>
                    </form>
                </div>
                <div className={styles.secondSection}>
                    <h5>When i mark everything as read:</h5>
                    <form action="">
                        <div>
                            <label htmlFor="">
                                <input type="checkbox" value="Prompt to confirm" checked />
                                Prompt to confirm
                            </label>
                        </div>
                    </form>
                </div>
                <div className={styles.thirdSection}>
                    <h5>Keyboard shortcuts</h5>
                    <div>
                        <ul>
                            <li>
                                Mark all messages in current channel as read
                                <span className={styles.esc}>Esc</span>
                            </li>
                            <li>Mark all messages as read
                                <span className={styles.esc}>Shift</span>
                                {' '} {' '}
                                <span className={styles.esc}>Esc</span> </li>
                            <li>Mark a message as unread
                                <span className={styles.esc}>Alt </span> {' '} {' '}
                                and click message</li>
                        </ul>
                        <p>And that’s just the beginning. To view the full list of keywords shortcuts,
                            just press <br />
                            <span className={styles.esc}> Ctrl </span>
                            {' '} {' '} +
                            <span className={styles.esc}> / </span></p>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default MarkAsRead