import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashbord from '../Dashbord/Dashbord'
import Journal from '../Journal/Journal'
import JournalWidet from '../Journal/Widet'

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
                { title: 'Dashboard', path: '/placeholder', icon: 'dashboard' },
                { title: 'Admin Pannel', path: '/placeholder', icon: 'person' },
                { title: 'Accounting', is_label: true },
                { title: 'Journal', path: '/journal', icon: 'book' },
                { title: 'Banks', path: '/bank', icon: 'request_quote' },
                { title: 'Inventory', path: '/inventory', icon: 'request_quote' },
                { title: 'Expenses', path: '/expenses', icon: 'request_quote' },
                { title: 'Incomes', path: '/incomes', icon: 'request_quote' },
                { title: 'Management', is_label: true },
                { title: 'Employee', path: '/employee', icon: 'book' },
                { title: 'Accounting', is_label: true },
                { title: 'Chart of Accounts', path: '/placeholder', icon: 'request_quote' },
                { title: 'Income Statement', path: '/placeholder', icon: 'request_quote' },
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
              <Route path='/journal' component={JournalWidet} />
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
