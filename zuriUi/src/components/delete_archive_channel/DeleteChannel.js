import ChannelModal from './ChannelModal'
import styles from './ArchiveChannel.module.css'


const DeleteChannel = ({closeEdit}) => {

    return (
        <ChannelModal closeEdit={closeEdit} full title = "Delete this Channel?">
            <div className={styles.content}>
                    <p className={styles.p}>When you delete a channel, all messages from this channel will be removed from Zuri Chat immediately. This can't be undone.</p>
            <p className={styles.p}>Keep in mind that:</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Any files uploaded to this channel won't be removed</li>
                <li className={styles.li}>You can <a className={styles.a} href="/"> archive a channel </a> instead without removing its messages </li>
            </ul>
            {/* {reusableModal === "archive channel" && <ArchiveChannel />} */}
            <div className={styles.checkdiv}>
                <input 
                type="checkbox"
                name="DeleteChannel"
                className={styles.checkbox}
                id="check"
                // value={deleteChannel} 
                />
                <span className={styles.check}>Yes, permanently delete the channel</span>
            </div>
            <div className={styles.button}>
                <button className={styles.button1}>Cancel</button>
                <button className={styles.button3}>Delete Channel</button>
            </div>
            </div>
        
        </ChannelModal>
    )
}

export default DeleteChannel
