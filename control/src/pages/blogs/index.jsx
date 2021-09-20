import React from 'react'
import styles from './Style/style.module.css'
import BlogContent from './components/blogContent'
import NewsLetter from './components/newsLetterSection'
import Comments from './components/comments'
import RelatedArticles from './components/relatedArticles'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
const index = () => {
  return (
    <>
      <Header />
      <div className={styles.Blog_container}>
        <div className={styles.Blog_text}>
          <BlogContent />
          <NewsLetter />
          <Comments />
        </div>
        <div className={styles.keep_reading}>
          <RelatedArticles />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default index
