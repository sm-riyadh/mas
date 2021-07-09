import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
// import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

import { Content } from '../../components'

const Dashbord = () => {
  const { __template__, status, error } = useSelector(state)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <section className='p-3 overflow-y-auto scrollbar h-content'>
        <div className='mb-2 ml-5 text-xs'>&lt; Back &gt; Details</div>
        <Content>adad</Content>
      </section>
    </Fragment>
  )
}

export default Dashbord
