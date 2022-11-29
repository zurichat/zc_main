import React from "react";
import { Link } from "react-router-dom";
import styles from "./channeldetail.module.css";
import cancel from "../../../assets/images/close.png";
import star from "../../../assets/images/star.png";
import calling from "../../../assets/images/call-calling.png";
import notify from "../../../assets/images/notification.png";
import copy from "../../../assets/images/copy.png";

const ChannelDetails = ({ setAddChannelDetails }) => {
  return (
    <div className={styles.ChannelDetails__wrapperer}>
      <form action="" className={styles.ChannelDetails__container}>
        <div className={styles.ChannelDetails__heading}>
          <p className={styles.ChannelDetails__header}>mechanic team prybar</p>
          <div onClick={() => setAddChannelDetails(false)}>
            <img src={cancel} alt="" />
          </div>
        </div>

        <div className={styles.ChannelDetails_logos}>
          <img src={star} alt="" />
          <img src={calling} alt="" />
          <img src={notify} alt="" />
        </div>

        <div className={styles.ChannelDetails_links}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>About</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Members (14)</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Integrations</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Settings</p>
          </Link>
        </div>

        <div className={styles.ChannelDetails__channelname}>
          <div className={styles.ChannelDetails__channeltextbody}>
            <h6>Channel Name</h6>
            <p># important briefings</p>
          </div>
          <p className={styles.greentext}>Edit </p>
        </div>

        <div className={styles.ChannelDetails__channelname__container}>
          <div className={styles.ChannelDet__channelname}>
            <div className={styles.ChannelDetails__channeltextbody}>
              <h6>Topic</h6>
              <p># important briefings</p>
            </div>
            <p className={styles.greentext}>Edit </p>
          </div>
          <div className={styles.ChannelDet__channelname}>
            <div className={styles.ChannelDetails__channeltextbody}>
              <h6>Description</h6>
              <p>Only important information will be sent to this channel</p>
            </div>
            <p className={styles.greentext}>Edit </p>
          </div>
          <div className={styles.ChannelDet__channelname}>
            <div className={styles.ChannelDetails__channeltextbody}>
              <h6>Channel Created by</h6>
              <p>Magnolia Fashikun, November 24, 2022</p>
            </div>
            <p className={styles.greentext}>Edit </p>
          </div>

          <p className={styles.redtext}>Leave Channel</p>
        </div>

        <div className={styles.channel__id}>
          <p className={styles.channel__id_greentext}>
            Channel ID: C057R41MAUR
          </p>
          <div>
            <img src={copy} alt="" />
          </div>
        </div>

        <div className={styles.files}>
          <h6>Files</h6>
          <p>
            There are no files to view. Drag and drop any file into the message
            pane to add them.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ChannelDetails;
