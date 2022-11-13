import React, { useState, useEffect } from "react";
import style from "../Style/style.module.css";
import loadingStyle from "../../../component-styles/LoginLoading.module.css";
import logo from "../../../component-assets/zurilogo.svg";
import first from "../assets/Card1.png";
import second from "../assets/Card2.png";
import axios from "axios";
import parse from "html-react-parser";
import { ErrorCode } from "react-dropzone";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  const [posts, setPosts] = useState("loading");
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const { data } = await axios.get("https://api.zuri.chat/posts");
      setPosts(data.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (posts === "loading") {
    return (
      <div className={loadingStyle.loadingContainer}>
        <div className={loadingStyle.loaderContainer}>
          <div>
            <img
              width="100"
              height="100"
              className={loadingStyle.rotate}
              src={logo}
            />
          </div>
          <div className={loadingStyle.loadingStatus} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={loadingStyle.loadingContainer}>
        <div className={loadingStyle.loaderContainer}>
          <div className={loadingStyle.loadingStatus}>
            <h1>Error, please refresh the page</h1>
          </div>
        </div>
      </div>
    );
  }

  if (posts === null) {
    return (
      <div className={loadingStyle.loadingContainer}>
        <div className={loadingStyle.loaderContainer}>
          <div className={loadingStyle.loadingStatus}>
            <h1>No blog posts</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    // < className={style.reading}>
    //   <h1>Keep reading</h1>

    <div className={style.main_conainer}>
      <div className={style.reading}>
        {posts !== undefined &&
          posts !== null &&
          posts.map(({ title, image_url, content, _id, created_at }) => (
            <Link
              to={{
                pathname: `/blog/${title}`,
                state: { postId: _id }
              }}
              // state={{ postId: _id }}
              key={_id}
            >
              <div className={style.keep_reading_box} key={_id}>
                <div className={style.keep_reading_img}>
                  <img src={logo} alt="post image" />
                </div>
                <div className={style.keep_reading_text}>
                  {/* <p className={style.getting}>Getting Started</p> */}
                  <h4
                    style={{
                      fontSize: 18,
                      padding: 0,
                      margin: 0,
                      lineHeight: "30px",
                      fontWeight: 900
                    }}
                  >
                    {title}
                  </h4>
                  <div className={style.getting_text}>{parse(content)}</div>
                  <div className={style.date_min}>
                    <p className={style.date}>
                      {new Date(created_at).toLocaleString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}
                    </p>
                    {/* <p className={style.min}>4 Mins Read</p> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogPosts;
