import ChannelModal from "./ChannelModal";
import styles from "./archive-channel.module.css";

const PrivateChannel = ({ closeEdit }) => {
  return (
    <ChannelModal
      closeEdit={closeEdit}
      full
      archiveTitle="Make this channel Private?"
    >
      <div className={styles.content}>
        <p className={styles.p}>When you make a channel private</p>
        <p className={styles.p}>It means that:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            only you can invite members to this channel
          </li>
        </ul>
        <div className={styles.button}>
          <button className={styles.button4}>Cancel</button>
          <button className={styles.button2}>Archive Channel</button>
        </div>
      </div>
    </ChannelModal>
  );
};

export default PrivateChannel;
