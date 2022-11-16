import React from "react";
import { Backdrop, Modalstyle } from "./style.styled.js";

import google from "./assets/google.svg";
import shortcut from "./assets/Ellipsis.svg";
import post from "./assets/FileADD.svg";
import laptop from "./assets/Laptop.svg";
import reminder from "./assets/bell-line.svg";
import recentFile from "./assets/folders-line.svg";
import thunder from "./assets/Thunderbolt.svg";

const Modal = ({ onClear }) => {
  return (
    <>
      <Backdrop onClick={onClear} />
      <Modalstyle>
        <div className="card">
          <div className="head">
            <img src={thunder} alt="" />
            <input className="icon" type="text" placeholder="Search shortcut" />
            <div className="line"></div>
          </div>
          <div role="listbox" className="details">
            <div className="detailsCard">
              <div className="detailsCard2">
                <div className="firstDiv">
                  <small>Shortcuts</small>
                </div>
                <div className="secondDiv">
                  <div>
                    <img src={post} alt="post" />
                    <span>Create a post</span>
                  </div>
                </div>
                <div className="thirdDiv">
                  <div>
                    <img src={reminder} alt="reminder" />
                    <span>Create a reminder</span>
                  </div>
                </div>
                <div className="fourthDiv">
                  <div>
                    <img src={google} alt="google" />
                    <span>Add from Google Drive</span>
                  </div>
                </div>
                <div className="fifthDiv">
                  <div>
                    <img src={shortcut} alt="shortcut" />
                    <span>Browse all shortcuts</span>
                  </div>
                </div>

                <div className="firstyDiv">
                  <small>Attach</small>
                </div>
                <div className="secondyDiv">
                  <div>
                    <img src={recentFile} alt="recent_files" />
                    <span>Recent Files</span>
                  </div>
                </div>

                <div className="thirdyDiv">
                  <div>
                    <div>
                      <div className="top">
                        <img src={laptop} alt="Upload" />
                        <span>Upload from your computer</span>
                      </div>
                      <div className="bottom">⌘U</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modalstyle>
    </>
  );
};

export default Modal;
