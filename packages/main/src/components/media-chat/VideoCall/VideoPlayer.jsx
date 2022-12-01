import { useEffect, useRef } from "react";
import styles from "./styles/videoplayer.module.css";

const VideoPlayer = ({ user, localId }) => {
  const ref = useRef();
  useEffect(() => {
    user?.videoTrack.play(ref.current);
    user?.audioTrack.play(ref.current);
    if (user.uid == localId) {
      user?.audioTrack.stop(ref.current);
    }
    return () => {
      user?.videoTrack.stop(ref.current);
      user?.audioTrack.stop(ref.current);
    };
  }, []);
  return (
    <div className={`${styles.videoplayer}`}>
      <div ref={ref} className={`${styles.video}`}></div>
    </div>
  );
};

export default VideoPlayer;
