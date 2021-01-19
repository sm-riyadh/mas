import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import __Template__ from './__Template__/__Template__'

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/' component={__Template__} />
      </Switch>
    </Fragment>
  )
}

export default App
