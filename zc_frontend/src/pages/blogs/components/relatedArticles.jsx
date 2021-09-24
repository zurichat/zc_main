import React, { useState } from 'react'
import style from '../Style/style.module.css'
import first from '../assets/Card1.png'
import second from '../assets/Card2.png'
import ReactReadMoreReadLess from 'react-read-more-read-less'
import { useParams, Link, Redirect } from 'react-router-dom'
const RelatedArticles = ({ blogs }) => {
  return (
    <div className={style.main_conainer}>
      <h1>Keep reading</h1>

      <div className={style.reading}>
        {blogs.map(blog => (
          <div className={style.keep_reading_box} key={blog._id}>
            <Link to={`blogs/${blog._id}`}>
              <div className={style.keep_reading_img}>
                <img src={first} alt="" />
              </div>
            </Link>
            <div className={style.keep_reading_text}>
              <p className={style.getting}>Getting Started</p>
              <h3 style={{ fontSize: 25, padding: 0, margin: 0 }}>
                {blog.title}
              </h3>
              <p className={style.getting_text}>
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={'Read more'}
                  readLessText={'Read less'}
                  readMoreClassName={style.read_more}
                  readLessClassName={style.read_more}
                >
                  {blog.content}
                </ReactReadMoreReadLess>
              </p>
              <div className={style.date_min}>
                <p className={style.date}>27 August 2021</p>
                <p className={style.min}>4 Mins Read</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedArticles
