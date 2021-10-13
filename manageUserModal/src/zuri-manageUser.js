import React from "react"
import ReactDOM from "react-dom"
import singleSpaReact from "single-spa-react"
import Root from "./root.component"

let enhancedComponent = Root

export const AddUserModal = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: enhancedComponent
})

export const name = "Add User Modal"

export const bootstrap = [
  () => {
    enhancedComponent = () => <Root />
    return Promise.resolve()
  }
]
export const mount = ReactDOM
export const unmount = enhancedComponent
