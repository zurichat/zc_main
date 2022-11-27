import styles from "./hover-items.module.css";

import { Bookmark, More, NewEmoji, Reply, Share } from "@assets/index";
import { BrowserRouter, Link, useHistory, useLocation } from "react-router-dom";

export default function HoverItems(props) {
  const { id, handleShowMoreOptions, handleShowEmoji } = props;
  const history = useHistory();
  // let location = useLocation();
  const pathname = window.location.pathname;
  function handleClick() {
    history.push("/home");
  }

  return (
    <>
      <BrowserRouter>
        <div className={styles.HoverItems}>
          <div onClick={event => handleShowEmoji(id, event)}>
            <img src={NewEmoji} alt="emoji imag" />
          </div>
          <div>
            {/* <Link to={"/"}>Hello</Link> */}
            <Link to={`${pathname}/thread/${id}`}>
              <img src={Reply} alt="reply image" />
            </Link>
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
      </BrowserRouter>
    </>
  );
}
