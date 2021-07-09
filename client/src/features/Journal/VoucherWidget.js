import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Nav, Header, Content } from '../../components'

const Voucher = () => {
  const { voucher, status, error } = useSelector(state => state.voucher)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <section className='p-5'>
        <div className='text-right'>
          <p className='text-xs text-gray-500'>Date</p>
          <p className='text-xl'>{`${voucher.day} ${voucher.month}, ${voucher.year}`}</p>
        </div>
        <br />
        <div className='text-right'>
          <p className='text-xs text-gray-500'>Voucher ID</p>
          <p className='text-xl'>{voucher.id.slice(20, voucher.id.length)}</p>
        </div>
      </section>
    </Fragment>
  )
}

export default Voucher
