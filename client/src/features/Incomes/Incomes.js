import React, { Fragment, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Content, NavPath } from '../../components'

const Journal = () => {
  const { __template__, status, error } = useSelector(state)
  const dispatch = useDispatch()

  const [ count, setCount ] = useState([
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
    {
      link    : '/bank',
      initial : 'NRBC',
      name    : 'National Rational Banking Complex',
      balance : '212500',
      loan    : '1200',
    },
  ])

  return (
    <Fragment>
      <NavPath>Inventory</NavPath>
      {count.map(({ initial, name, balance, loan }) => (
        <Fragment>
          <div className='flex-grow'>
            <Link to='/bank/HP-32123'>
              <Content>
                <div className='flex justify-between px-3'>
                  <div>
                    <p className='text-xl'>Catagory</p>
                    <p className='text-xs text-gray-400'>Describsion</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm'>Quantities: ...</p>
                    <p className='text-sm'>Price: ...</p>
                  </div>
                </div>
                <br />
                <table className='table w-full'>
                  <thead>
                    <tr>
                      <th>...</th>
                      <th>...</th>
                      <th>...</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </Content>
            </Link>
          </div>
        </Fragment>
      ))}
    </Fragment>
  )
}

export default Journal
