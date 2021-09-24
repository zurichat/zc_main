import React, { useState, useEffect } from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'

const GetAll = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(false)

  // const fetcBlog = async () => {
  //   try {
  //     const response = await fetch(`/api/blogs/${id}`)
  //     const data = await response.json()
  //     console.log(data, 'telephone details')
  //     setBlog(data)
  //   } catch (error) {
  //     setError(true)
  //   }
  // }
  // useEffect(() => {
  //   fetcBlog()
  // }, [])
  const FetchAll = async () => {
    try {
      const blogs = await fetch('https://api.zuri.chat/posts')
      const data = await blogs.json()
      console.log(data.data, 'blogs')
      setBlogs(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    FetchAll()
  }, [])
  const handleClick = id => {}
  return (
    <div>
      {blogs.map(blog => {
        return (
          <div key={blog._id} style={{ height: 'auto', width: 300 }}>
            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default GetAll
