import { configureStore } from '@reduxjs/toolkit'
import __template__ from './slice/__template__/__template__Slice'
import journal from './slice/journal/journalSlice'
import audit from './slice/audit/auditSlice'
import voucher from './slice/voucher/voucherSlice'
import bank from './slice/bank/bankSlice'
import bankDetail from './slice/bankDetail/bankDetailSlice'

export default configureStore({
  reducer : {
    __template__,
    journal,
    audit,
    voucher,
    bank,
    bankDetail,
  },
})
