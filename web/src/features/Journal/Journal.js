import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Content, NavPath } from '../../components'
import Voucher from './Voucher'

const Journal = () => {
  const { journal, status, error } = useSelector(state => state.journal)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Route exact path='/journal'>
        <NavPath>Journal</NavPath>
        {journal.map(
          ({ section, day, month, year, id, create_by, audit_by, cash_in_hand, expenses, incomes }) =>
            !section ? (
              <Fragment>
                <div className='flex'>
                  <h2 className='m-2 mr-4 text-gray-500 grid-span-1'>
                    <p className='text-2xl'>{day}</p>
                    <p>{month}</p>
                    <p className='text-xs'>{year}</p>
                  </h2>
                  <div className='flex-grow'>
                    <Link to={`/journal/${id}`}>
                      <Content>
                        <div className='grid grid-cols-2'>
                          <div>
                            ID: {id.slice(20, id.length)}
                            <br />
                            Created by: {create_by}
                            <br />
                            Audited by: {audit_by}
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
            ) : (
              <h2 className='m-2 mt-5'>
                <p className='text-sm text-gray-600'>{section}</p>
              </h2>
            )
        )}
      </Route>
      <Route exact path='/journal/:id' component={Voucher} />
    </Fragment>
  )
}

export default Journal
