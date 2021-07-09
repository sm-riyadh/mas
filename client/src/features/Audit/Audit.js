import React, { Fragment, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Content, NavPath } from '../../components'
import Voucher from './Voucher'

const Audit = () => {
  const { audit, status, error } = useSelector(state => state.audit)
  const dispatch = useDispatch()

  let currentDate = ''
  let currentMonth = ''
  const changeCurrentDate = date => {
    currentDate = date
  }
  const changeCurrentMonth = month => {
    currentMonth = month
  }

  return (
    <Fragment>
      <Route exact path='/audit'>
        <NavPath>Audit</NavPath>
        {audit.map(({ day, month, year, id, create_by, cash_in_hand, expenses, incomes }) => {
          return (
            <Fragment>
              <div className='flex'>
                {currentMonth !== month ? (
                  <h2 className='mt-5 mb-2'>
                    {changeCurrentMonth(month)}
                    <p className='text-sm text-gray-600'>
                      {month}, {year}
                    </p>
                  </h2>
                ) : (
                  changeCurrentMonth(month)
                )}
              </div>
              <div className='flex'>
                {currentDate !== '' + day + month + year ? (
                  <Fragment>
                    {changeCurrentDate('' + day + month + year)}
                    <hr />
                    <h2 className='flex flex-col items-center w-8 mr-4 text-gray-600 grid-span-1'>
                      <p className='mt-3 text-2xl'>{day}</p>
                      <p className='text-sm'>{month.slice(0, 3).toUpperCase()}</p>
                      <div className='w-0 h-full border-l-2 border-gray-300 border-dashed' />
                      {/* <p className='text-xs'>{year}</p> */}
                    </h2>
                  </Fragment>
                ) : (
                  <Fragment>
                    {changeCurrentDate('' + day + month + year)}
                    <h2 className='flex flex-col items-center w-8 mr-4 grid-span-1'>
                      <div className='w-0 h-full border-l-2 border-gray-300 border-dashed' />
                    </h2>
                  </Fragment>
                )}

                <div className='flex-grow'>
                  <Link to={`/audit/${id}`}>
                    <Content>
                      <div className='grid grid-cols-2'>
                        <div>
                          ID: {id.slice(20, id.length)}
                          <br />
                          Created by: {create_by}
                        </div>
                        <div className='text-right'>
                          Cash in hand: {cash_in_hand}
                          <br />
                          Expenses: {expenses}
                          <br />
                          Income: {incomes}
                          <br />
                        </div>
                      </div>
                    </Content>
                  </Link>
                </div>
              </div>
            </Fragment>
          )
        })}
      </Route>
      <Route exact path='/audit/:id' component={Voucher} />
    </Fragment>
  )
}

export default Audit
