import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../Style/style.module.css";
import { UitCommentDots } from "@iconscout/react-unicons-thinline";
import Like from "../assets/thumbs-up-white.svg";
import Avatar from "../assets/user.svg";
import { TransitionGroup } from "react-transition-group";

import {
  UilFacebookF,
  UilTwitter,
  UilLinkedinAlt
} from "@iconscout/react-unicons";
import link from "../assets/link-black.svg";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment_content, setComment] = useState("");
  const [PostComment, setPostComment] = useState(0);
  const [show, setShow] = useState(false);

  const handleClear = () => {
    setComment("");
  };

  const handleShow = () => {
    setShow(!show);
  };
  // https://api.zuri.chat/posts
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("https://api.zuri.chat/posts/61464f251a5607b13c00bc48/comments", {
        comment_content: comment_content
      })
      .then(res => {
        // console.log(res.data)
        setComment(res.data.comment_content);
      });
    handleClear();
  };

  useEffect(() => {
    const url = "https://api.zuri.chat/posts/61464f251a5607b13c00bc48/comments";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setComments(json.data.comments);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const url = " https://api.zuri.chat/posts";

    const fetchPostComment = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        // console.log(json.data[0].comments, 'Mwafrika Comment')
        setPostComment(json.data[0].comments);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchPostComment();
    const interval = setInterval(() => {
      fetchPostComment();
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const handleChange = e => {
    setComment(e.target.value);
  };
  return (
    <div>
      <div className={style.comment_form}>
        <form action="">
          <textarea
            type="text"
            onChange={handleChange}
            name="comment_content"
            value={comment_content}
            placeholder="Comment here"
            onClick={handleShow}
          ></textarea>
          <button type="submit" onClick={handleSubmit}>
            Comment
          </button>
        </form>
      </div>

      <div className={style.comment_box}>
        <div className={style.comment_like}>
          <p>
            <a href="">
              <img src={Like} alt="" />
            </a>
            <span>0</span>
          </p>
          <p>
            <UitCommentDots style={{ marginRight: 7 }} />

            {PostComment}
          </p>
        </div>
        <div className={style.blog_links}>
          <p>
            <img src={link} alt="" className={style.clock} />
          </p>
          <p>
            <p>
              <UilFacebookF className={style.clock} />
            </p>
          </p>
          <p>
            <UilTwitter className={style.clock} />
          </p>
          <p>
            <UilLinkedinAlt className={style.clock} />
          </p>
        </div>
      </div>

      {show && (
        <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div
            className={style.comment_content}
            id="comment-form"
            style={{
              overflowY: "scroll",
              height: "25rem"
            }}
          >
            <div>
              <b>
                <h3 style={{ fontSize: 30 }}>Comments</h3>
              </b>
            </div>

            {comments
              .map(comm => (
                <div key={comm._id} className={style.comment_wrapper}>
                  <div className={style.avatar}>
                    <img src={Avatar} />
                  </div>
                  <div className={style.comment_card}>
                    <p className={style.comment_name}>Maurice Victor</p>
                    <p>
                      {comm.comment_content}
                      {/* {console.log(comm, 'Josue')} */}
                      <br />
                    </p>
                  </div>
                  <div className={style.dot}>
                    <a href="#">
                      <span>...</span>
                    </a>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </TransitionGroup>
      )}

      <div className={style.blog_buttons}>
        <a href="#">Team work</a>
        <a href="#">Company</a>
        <a href="#">Zuri Platform</a>
        <a href="#">Getting Started</a>
      </div>
      <div className={style.line}></div>
    </div>
  );
};

export default Comments;
