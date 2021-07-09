import React, { useState, Fragment } from 'react'

// import 'react-dates/initialize'
// import 'react-dates/lib/css/_datepicker.css'
// import { DayPickerSingleDateController, DayPickerRangeController } from 'react-dates'

import { Button } from '../../components'

import TreeView from './component/TreeView'

const Account = () => {
  const [ state, setState ] = useState({
    modal_new_account : false,

    hover_on          : '',
    parent            : '',
    children          : '',
    selected_item     : '',
    selected_type     : '',
    selected_location : [],

    hierarchy         : {
      assets      : {
        base : [],
      },
      liabilities : {
        base : [],
      },
      equities    : {
        base : [],
      },
      expenses    : {
        base : [],
      },
      incomes     : {
        base : [],
      },
    },

    name              : '',
    type              : '',
    path              : '',
    isFolder          : '',
  })

  const onChangeHandler = (name, action) => setState({ [name]: action })

  return (
    <Fragment>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Assets</th>
              <th className='txtRight'>
                <Button
                  small
                  chip
                  icon='add'
                  onClick={() => {
                    onChangeHandler('modal_new_account', true)
                    onChangeHandler('selected_location', 'base')
                    onChangeHandler('selected_type', 'assets')
                  }}
                >
                  New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody onMouseLeave={() => setState({ hover_on: '' })}>
            <TreeView
              accountType='assets'
              root={state.hierarchy.assets}
              base={state.hierarchy.assets.base}
              data={state.account}
              location={[ 'assets' ]}
              hoverOn={state.hover_on}
              setHoverOn={id => onChangeHandler('hover_on', id)}
              setSelectItem={id => onChangeHandler('selected_item', id)}
              toggleModalSettings={id => {
                onChangeHandler('modal_settings', true)
                onChangeHandler('selected_item', id)
              }}
              toggleModalCreate={location => {
                onChangeHandler('modal_new_account', true)
                onChangeHandler('selected_location', location)
                onChangeHandler('selected_type', 'assets')
              }}
            />
            <tr>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <b>Total</b>
              </td>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <span>৳</span> 0
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Liabilities</th>
              <th className='txtRight'>
                <Button
                  small
                  chip
                  icon='add'
                  onClick={() => {
                    onChangeHandler('modal_new_account', true)
                    onChangeHandler('selected_location', 'base')
                    onChangeHandler('selected_type', 'liabilities')
                  }}
                >
                  New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody onMouseLeave={() => setState({ hover_on: '' })}>
            <TreeView
              accountType='liabilities'
              root={state.hierarchy.liabilities}
              base={state.hierarchy.liabilities.base}
              data={state.account}
              location={[ 'liabilities' ]}
              hoverOn={state.hover_on}
              setHoverOn={id => onChangeHandler('hover_on', id)}
              setSelectItem={id => onChangeHandler('selected_item', id)}
              toggleModalSettings={id => {
                onChangeHandler('modal_settings', true)
                onChangeHandler('selected_item', id)
              }}
              toggleModalCreate={location => {
                onChangeHandler('modal_new_account', true)
                onChangeHandler('selected_location', location)
              }}
            />
            <tr>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <b>Total</b>
              </td>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <span>৳</span> 0
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Equities</th>
              <th className='txtRight'>
                <Button
                  small
                  chip
                  icon='add'
                  onClick={() => {
                    onChangeHandler('modal_new_account', true)
                    onChangeHandler('selected_location', 'base')
                    onChangeHandler('selected_type', 'equities')
                  }}
                >
                  New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody onMouseLeave={() => setState({ hover_on: '' })}>
            <TreeView
              accountType='equities'
              root={state.hierarchy.equities}
              base={state.hierarchy.equities.base}
              data={state.account}
              location={[ 'equities' ]}
              hoverOn={state.hover_on}
              setHoverOn={id => onChangeHandler('hover_on', id)}
              setSelectItem={id => onChangeHandler('selected_item', id)}
              toggleModalSettings={id => {
                onChangeHandler('modal_settings', true)
                onChangeHandler('selected_item', id)
              }}
              toggleModalCreate={location => {
                onChangeHandler('modal_new_account', true)
                onChangeHandler('selected_location', location)
              }}
            />
            <tr>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <b>Total</b>
              </td>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <span>৳</span> 0
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Expenses</th>
              <th className='txtRight'>
                <Button
                  small
                  chip
                  icon='add'
                  onClick={() => {
                    onChangeHandler('modal_new_account', true)
                    onChangeHandler('selected_location', 'base')
                    onChangeHandler('selected_type', 'expenses')
                  }}
                >
                  New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody onMouseLeave={() => setState({ hover_on: '' })}>
            <TreeView
              accountType='expenses'
              root={state.hierarchy.expenses}
              base={state.hierarchy.expenses.base}
              data={state.account}
              location={[ 'expenses' ]}
              hoverOn={state.hover_on}
              setHoverOn={id => onChangeHandler('hover_on', id)}
              setSelectItem={id => onChangeHandler('selected_item', id)}
              toggleModalSettings={id => {
                onChangeHandler('modal_settings', true)
                onChangeHandler('selected_item', id)
              }}
              toggleModalCreate={location => {
                onChangeHandler('modal_new_account', true)
                onChangeHandler('selected_location', location)
              }}
            />
            <tr>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <b>Total</b>
              </td>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <span>৳</span> 0
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Incomes</th>
              <th className='txtRight'>
                <Button
                  small
                  chip
                  icon='add'
                  onClick={() => {
                    onChangeHandler('modal_new_account', true)
                    onChangeHandler('selected_location', 'base')
                    onChangeHandler('selected_type', 'incomes')
                  }}
                >
                  New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody onMouseLeave={() => setState({ hover_on: '' })}>
            <TreeView
              accountType='incomes'
              root={state.hierarchy.incomes}
              base={state.hierarchy.incomes.base}
              data={state.account}
              location={[ 'incomes' ]}
              hoverOn={state.hover_on}
              setHoverOn={id => onChangeHandler('hover_on', id)}
              setSelectItem={id => onChangeHandler('selected_item', id)}
              toggleModalSettings={id => {
                onChangeHandler('modal_settings', true)
                onChangeHandler('selected_item', id)
              }}
              toggleModalCreate={location => {
                onChangeHandler('modal_new_account', true)
                onChangeHandler('selected_location', location)
              }}
            />
            <tr>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <b>Total</b>
              </td>
              <td className='txtRight' style={{ backgroundColor: '#eeeeee' }}>
                <span>৳</span> 0
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  )
}

export default Account
