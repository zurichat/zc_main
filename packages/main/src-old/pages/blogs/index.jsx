import React from "react";
import styles from "./Style/style.module.css";
import BlogContent from "./components/blogContent";
import NewsLetter from "./components/newsLetterSection";
import BlogComments from "./components/BlogComments";
import RelatedArticles from "./components/relatedArticles";
import BlogPosts from "./components/BlogPosts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Blogs - Zuri Chat</title>
      </Helmet>
      <div className={styles.Blog_container}>
        {/* <div className={styles.Blog_text}> */}
        <BlogPosts />
        {/* <BlogContent /> */}
        {/* <NewsLetter />
          <BlogComments /> */}
        {/* </div> */}
        {/* <div className={styles.keep_reading}>
          <RelatedArticles />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
