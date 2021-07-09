import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Nav, Header, Content } from '../../components'

const Journal = () => {
  const { __template__, status, error } = useSelector(state)
  const dispatch = useDispatch()

  return <Fragment />
}

export default Journal
