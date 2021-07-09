import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashbord from '../Dashbord/Dashbord'

import Journal from '../Journal/Journal'
import JournalWidget from '../Journal/Widget'

import Audit from '../Audit/Audit'
import AuditWidget from '../Audit/Widget'

import Bank from '../Bank/Bank'
import BankWidget from '../Bank/Widget'

import Inventory from '../Inventory/Inventory'
import InventoryWidget from '../Inventory/Widget'

import Account from '../Account/Account'
import AccountWidget from '../Account/Widget'

import Expenses from '../Expenses/Expenses'
import ExpensesWidget from '../Expenses/Widget'

import Incomes from '../Incomes/Incomes'
import IncomesWidget from '../Incomes/Widget'

import Employee from '../Employee/Employee'
import EmployeeWidget from '../Employee/Widget'

import { Nav, Header } from '../../components'

const App = () => {
  return (
    <Fragment>
      <main className='grid h-screen overflow-hidden grid-cols-main max-w-screen'>
        <aside className='z-20 auto-cols-max'>
          <div className='h-full bg-gray-200'>
            <Nav
              tabs={[
                { title: 'Dashboard', path: '/placeholder', icon: 'dashboard', badge: 0 },
                { title: 'Admin Pannel', path: '/placeholder', icon: 'person', badge: 0 },
                { title: 'Accounting', is_label: true, badge: 0 },
                { title: 'Journal', path: '/journal', icon: 'book', badge: 0 },
                { title: 'Audit', path: '/audit', icon: 'fact_check', badge: 5 },
                { title: 'Banks', path: '/bank', icon: 'request_quote', badge: 0 },
                { title: 'Inventory', path: '/inventory', icon: 'request_quote', badge: 0 },
                { title: 'Expenses', path: '/expenses', icon: 'request_quote', badge: 0 },
                { title: 'Incomes', path: '/incomes', icon: 'request_quote', badge: 0 },
                { title: 'Management', is_label: true, badge: 0 },
                { title: 'Employee', path: '/employee', icon: 'book', badge: 0 },
                { title: 'Accounting', is_label: true, badge: 0 },
                { title: 'Chart of Accounts', path: '/placeholder', icon: 'request_quote', badge: 0 },
                { title: 'Income Statement', path: '/placeholder', icon: 'request_quote', badge: 0 },
              ]}
            />
          </div>
        </aside>
        <div className='bg-gray-100 auto-cols-max'>
          <Header />
          <section className='p-3 overflow-y-auto scrollbar h-content'>
            <Switch>
              <Route path='/' exact component={Dashbord} />
              <Route path='/dashbord' component={Dashbord} />
              <Route path='/journal' component={Journal} />
              <Route path='/audit' component={Audit} />
              <Route path='/bank' component={Bank} />
              <Route path='/inventory' component={Inventory} />
              <Route path='/expenses' component={Expenses} />
              <Route path='/incomes' component={Incomes} />
              <Route path='/employee' component={Employee} />
              <Route path='/coa' component={Account} />
              <Route path='/placeholder'>
                <h2>coming soon...</h2>
              </Route>
            </Switch>
          </section>
        </div>
        <aside className='z-20 auto-cols-max'>
          <div className='h-full bg-gray-200'>
            <Switch>
              <Route path='/journal' component={JournalWidget} />
              {/* <Route path='/audit' component={AuditWidget} /> */}
              <Route path='/bank' component={BankWidget} />
              <Route path='/inventory' component={InventoryWidget} />
              <Route path='/coa' component={AccountWidget} />
              <Route path='/expenses' component={ExpensesWidget} />
              <Route path='/incomes' component={IncomesWidget} />
              <Route path='/employee' component={EmployeeWidget} />
              <Route path='/placeholder'>
                <h2>coming soon...</h2>
              </Route>
            </Switch>
          </div>
        </aside>
      </main>
    </Fragment>
  )
}

export default App
