import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'

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
  let user = JSON.parse(sessionStorage.getItem('user'))
  let token = sessionStorage.getItem('token')
  let sessionId = sessionStorage.getItem('session_id')

  console.log(user)
  console.log(token)
  console.log(sessionId)

  return token
}

export const { bootstrap, mount, unmount } = lifecycles
