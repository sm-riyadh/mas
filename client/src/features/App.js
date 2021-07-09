import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Fragment>
  )
}

export default App
