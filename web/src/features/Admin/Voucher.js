import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Nav, Header, Content } from '../../components'

const Voucher = () => {
  const { __template__, status, error } = useSelector(state)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className='flex mb-2 ml-4 text-xs align-middle'>
        <button className='inline-flex px-2 py-1 align-middle bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-900'>
          <m-icon>navigate_before</m-icon>
          Back
        </button>
        <span className='p-1 '>
          <m-icon>navigate_next</m-icon>
        </span>
        <Link to='/journal'>
          <button className='inline-flex my-1 text-blue-400 align-middle hover:border hover:underline'>Journal</button>
        </Link>
        <span className='p-1'>
          <m-icon>navigate_next</m-icon>
        </span>
        <button className='inline-flex my-1 align-middle hover:border'>Voucher</button>
      </div>

      <Content>
        <section className='w-full grid grid-cols-2 gap-3'>
          <h4 className='pb-2 text-sm text-center text-gray-400'>Sources</h4>
          <h4 className='pb-2 text-sm text-center text-gray-400'>Destination</h4>
        </section>
        <section className='w-full grid grid-cols-2 gap-3'>
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
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
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
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MCL Bank</td>
                  <td>...</td>
                  <td className='text-right'>1,200 BDT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className='w-full grid  grid-cols-2 gap-3'>
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
