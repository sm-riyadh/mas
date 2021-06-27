import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Content, NavPath } from '../../components'

const Voucher = () => {
  const { bankDetail, status, error } = useSelector(state => state.bankDetail)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <NavPath paths={[ { title: 'Bank', link: '/bank' } ]}>{bankDetail.debit_amount}</NavPath>

      <Content>
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
                {console.log(bankDetail.credit)}
                {bankDetail.credit.map(({ no, credit, purpose, amount }) => (
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
                {bankDetail.debit.map(({ no, debit, purpose, amount }) => (
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
            <span className='pr-1 text-gray-500'>Total: </span> 1,200 BDT
          </div>
          <div className='w-full px-3 pt-1 mt-2 text-xs text-right'>
            <span className='pr-1 text-gray-500'>Total: </span> 1,200 BDT
          </div>
        </section>
      </Content>
    </Fragment>
  )
}

export default Voucher
