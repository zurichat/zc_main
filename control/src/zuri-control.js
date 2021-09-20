import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'
import axios from 'axios'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null
  }
})

export const GetUserInfo = () => {
  let userID = '6146f82c845b436ea04d10e1'
  let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFl6TWpBME1qa3pNbnhIZDNkQlIwUlplRTVFVFROTlJGVXdXa1JCZVU5RVVtbFplbHBvVDFSSmVVMTZVVEpaWnowOWZEZmM3TGdsUUc1OGhuak1oY1dVcGNOTS1xQXN5UEZtajR3eURYVlBtWkdFIiwiZW1haWwiOiJwaWRAb3h5LmNvbSIsImlkIjoiNjE0MzcwNTRkMDI4NGJjNmE5MjIzNDZiIiwib3B0aW9ucyI6eyJQYXRoIjoiLyIsIkRvbWFpbiI6IiIsIk1heEFnZSI6NjMwNzIwMDAwMCwiU2VjdXJlIjpmYWxzZSwiSHR0cE9ubHkiOmZhbHNlLCJTYW1lU2l0ZSI6MH0sInNlc3Npb25fbmFtZSI6ImY2ODIyYWY5NGUyOWJhMTEyYmUzMTBkM2FmNDVkNWM3In0.jrfU1SdZWYfRDW15LQqucu1CQUn52HyJKk-RlThN7fg'
  // let user = JSON.parse(sessionStorage.getItem('user'))
  // let token = sessionStorage.getItem('token')
  // let sessionId = sessionStorage.getItem('session_id')

  // console.log(user)
  // console.log( token)
  // console.log(sessionId)

  axios
    .get(`https://api.zuri.chat/users/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      let user = res.data.data
      console.log(user)
      return user
    })
    .catch(err => console.log(err))

  return token
}

export const { bootstrap, mount, unmount } = lifecycles
