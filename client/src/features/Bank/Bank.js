import React, { Fragment, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Content, NavPath } from '../../components'
import BankDetails from './BankDetails'

const Journal = () => {
  const { bank, status, error } = useSelector(state => state.bank)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Route exact path='/bank'>
        <NavPath>Bank</NavPath>
        {bank.map(({ id, initial, name, balance, loan }) => (
          <Fragment>
            <div className='flex-grow'>
              <Link to={`/bank/${id}`}>
                <Content>
                  <div className='grid grid-cols-2'>
                    <div>
                      <p className='text-2xl'>{initial}</p>
                      <p className='text-sm'>{name}</p>
                    </div>
                    <div className='text-right'>
                      Balace: {balance}
                      <br />
                      Loan: {loan}
                    </div>
                  </div>
                </Content>
              </Link>
            </div>
          </Fragment>
        ))}
      </Route>
      <Route exact path='/bank/:id' component={BankDetails} />
    </Fragment>
  )
}

export default Journal
