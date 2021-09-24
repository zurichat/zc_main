import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from './components'
const Bolgs = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/blogs" exact components={Blog} />
          <Route path="/blogs/:_id" exact components={Blog} />
        </Switch>
      </Router>
    </>
  )
}

export default Bolgs
