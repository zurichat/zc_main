import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../Style/style.module.css'
import axios from 'axios'
import BlogContent from './blogContent'
import NewsLetter from './newsLetterSection'
import Comments from './comments'
import RelatedArticles from './relatedArticles'
import Footer from '../../../components/externalPagesComponents/Footer/Footer'
import Header from '../../../components/externalPagesComponents/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'

const Bolgs = () => {
  const [blogs, setBlogs] = useState([])
  const [blog, setBlog] = useState({})
  const { id } = useParams()

  const handleGetBlogs = () => {
    axios.get('https://api.zuri.chat/posts').then(response => {
      setBlogs(response.data.data)
    })
  }
  useEffect(() => handleGetBlogs(), [])
  const handleGetBlog = () => {
    axios.get(`https://api.zuri.chat/posts/${id}`).then(response => {
      setBlog(response.data.data)
    })
  }
  useEffect(() => handleGetBlog(), [])

  blogs.find(blog => blog.id === id)
  // console.log(Blog, 'single blog')
  return (
    <>
      <div>
        {/* <Header />
        <div className={styles.Blog_container}>
          <div className={styles.Blog_text}>
            <BlogContent blogs={blogs} />
            <NewsLetter />
            <Comments />
          </div>
          <div className={styles.keep_reading}>
            <RelatedArticles blogs={blogs} />
          </div>
        </div>
        <Footer /> */}
        <h1>Details</h1>
      </div>
    </>
  )
}

export default Bolgs
