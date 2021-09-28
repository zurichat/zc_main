import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
// import singleSpa from 'single-spa'
import Root from './root.component'

let enhancedComponent = Root

export const pluginHeader = singleSpaReact(
  {
    React,
    ReactDOM,
    rootComponent: enhancedComponent
  },
  { user: 'name' }
)

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

export const pluginConfig = () => {
  const [state, setState] = useState('default')

  return [state, setState]
}
