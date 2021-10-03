import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'

let enhancedComponent = Root

export const commentSidebar = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: enhancedComponent
})

// export const showCommentSidebar = () => {

// }

export const name = 'Comment sidebar'

export const bootstrap = [
  () => {
    enhancedComponent = () => <Root />
    return Promise.resolve()
  }
]
export const mount = ReactDOM
export const unmount = enhancedComponent

// import React from 'react'
// import ReactDOM from 'react-dom'
// import singleSpaReact from 'single-spa-react'
// import Root from './root.component'

// const lifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: Root,
//   errorBoundary(err, info, props) {
//     // Customize the root error boundary for your microfrontend here.
//     return null
//   }
// })

// export const { bootstrap, mount, unmount } = lifecycles
