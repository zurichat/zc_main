import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'

let enhancedComponent = Root

export const pluginHeader = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: enhancedComponent
})

export const name = 'Plugin header'

export const bootstrap = [
  args => {
    console.log('Main component', args.name)
    enhancedComponent = () => <Root />
    return Promise.resolve()
  }
]
export const mount = ReactDOM
export const unmount = enhancedComponent
