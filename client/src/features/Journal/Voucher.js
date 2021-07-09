import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Content, NavPath } from '../../components'

const Voucher = () => {
  const { voucher, status, error } = useSelector(state => state.voucher)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <NavPath paths={[ { title: 'Journal', link: '/journal' } ]}>{voucher.id}</NavPath>

      <Content>
        <Link to={`/journal/${voucher.id}/edit`}>
          <div className='button'>Edit</div>
        </Link>
        <section className='grid w-full grid-cols-2 gap-3'>
          <h4 className='pb-2 text-sm text-center text-gray-400'>Sources</h4>
          <h4 className='pb-2 text-sm text-center text-gray-400'>Destination</h4>
        </section>
        <section className='grid w-full grid-cols-2 gap-3'>
          <div className='bg-gray-100 rounded-md'>
            <table className='table w-full'>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Source</th>
                  <th>Description</th>
                  <th className='text-right'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {voucher.credit.map(({ no, credit, purpose, amount }) => (
                  <tr>
                    <td>{no + 1}</td>
                    <td>{credit}</td>
                    <td>{purpose}</td>
                    <td className='text-right'>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='bg-gray-100 rounded-md'>
            <table className='table w-full'>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Source</th>
                  <th>Description</th>
                  <th className='text-right'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {voucher.debit.map(({ no, debit, purpose, amount }) => (
                  <tr>
                    <td>{no + 1}</td>
                    <td>{debit}</td>
                    <td>{purpose}</td>
                    <td className='text-right'>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className='grid w-full grid-cols-2 gap-3'>
          <div className='w-full px-3 pt-1 mt-2 text-xs text-right'>
            <span className='pr-1 text-gray-500'>Total: </span> {voucher.credit_amount}
          </div>
          <div className='w-full px-3 pt-1 mt-2 text-xs text-right'>
            <span className='pr-1 text-gray-500'>Total: </span> {voucher.debit_amount}
          </div>
        </section>
      </Content>
    </Fragment>
  )
}

export default Voucher
