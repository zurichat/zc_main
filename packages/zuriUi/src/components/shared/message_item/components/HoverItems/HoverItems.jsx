import styles from "./HoverItems.module.css";

import { Bookmark, More, NewEmoji, Reply, Share } from "@assets/index";

export default function HoverItems(props) {
  const { id, handleShowMoreOptions, handleShowEmoji } = props;

  return (
    <>
      <div className={styles.HoverItems}>
        <div onClick={event => handleShowEmoji(id, event)}>
          <img src={NewEmoji} alt="emoji imag" />
        </div>
        <div>
          <img src={Reply} alt="reply image" />
        </div>
        <div>
          <img src={Share} alt="share image" />
        </div>
        <div>
          <img src={Bookmark} alt="bookmark image" />
        </div>
        <div onClick={event => handleShowMoreOptions(id, event)}>
          <img src={More} alt="more image" />
        </div>
      </div>
    </>
  );
}
