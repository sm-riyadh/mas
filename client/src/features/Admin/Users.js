import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Nav, Header, Content } from '../../components'
import Voucher from './Voucher'
import VoucherWidget from './VoucherWidget'

const Journal = () => {
  const { __template__, status, error } = useSelector(state)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Route exact path='/journal'>
        <div className='flex mb-2 ml-4 text-xs align-middle'>
          <button className='inline-flex px-2 py-1 align-middle bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-900'>
            <m-icon>navigate_before</m-icon>
            Back
          </button>
          <span className='p-1 '>
            <m-icon>navigate_next</m-icon>
          </span>
          <button className='inline-flex my-1 align-middle hover:border'>Journal</button>
        </div>
        <Link to='/journal/HP-32123'>
          <Content>adad</Content>
        </Link>
      </Route>
      <Route exact path='/journal/:id' component={Voucher} />
    </Fragment>
  )
}

export default Journal
