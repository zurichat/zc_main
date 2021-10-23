import ChannelModal from './ChannelModal'
import styles from './ArchiveChannel.module.css'

const ArchiveChannel = ( {closeEdit} ) => {
    return (
        <ChannelModal 
        closeEdit={closeEdit}
        full archiveTitle = "Archive this Channel for everyone?">
            <div className={styles.content}>
                <p className={styles.p}>When you archive a channel, it's archived for everyone. That means...</p>
                <p className={styles.p}>Keep in mind that:</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>No one will be able to send messages to the channel</li>
                    <li className={styles.li}>Any apps installed in the channel will be disabled</li>
                </ul>
                <p className={styles.p}>
                    You will still be able to find the channel's contents via search. <br />And you can always unarchive the channel in the future, if you'd like.
                </p>
                <div className={styles.button}>
                    <button className={styles.button4}>Cancel</button>
                    <button className={styles.button2}>Archive Channel</button>
                </div>
            </div>
          
        </ChannelModal>
    )
}

export default ArchiveChannel