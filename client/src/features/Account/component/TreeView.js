import React, { Fragment } from 'react'
import _times from 'lodash.times'

import { Button } from '../../../components'

const TreeView = ({
  root,
  base,
  data,
  hoverOn,
  setHoverOn,
  toggleModalSettings,
  toggleModalCreate,
  indicator = false,
  spacing = 0,
}) =>
  base.map(item => {
    const account = data.find(e => e.id === item)

    const id = account.id
    const name = account.name
    const balance = account.balance
    const isFolder = account.isFolder
    const isSystem = account.isSystem

    return (
      <Fragment key={id}>
        <tr onMouseEnter={() => setHoverOn(id)}>
          <td>
            <container>
              {indicator &&
                _times(spacing, () => (
                  <Fragment>
                    {/* <LineIndicator /> */}
                    {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                  </Fragment>
                ))}
              {!isFolder ? (
                <div>
                  {name} {isSystem && ' 🔐'}
                </div>
              ) : (
                <div>
                  <i className='material-icons'>folder</i>
                  {name} {isSystem && ' 🔐'}
                </div>
              )}
            </container>
          </td>
          <td style={{ maxWidth: '3rem' }} className='txtRight'>
            <span>৳</span> {balance}
            {true &&
            isFolder &&
            id === hoverOn && (
              <Button
                small
                chip
                style={{
                  margin : '0',
                }}
                icon='add'
                onClick={() => toggleModalCreate(id)}
              >
                New
              </Button>
            )}
            {!isSystem &&
            id === hoverOn && (
              <Button
                small
                chip
                style={{
                  margin : '0',
                }}
                icon='edit'
                onClick={() => toggleModalSettings(id)}
              >
                Edit
              </Button>
            )}
          </td>
        </tr>
        {root[item] ? (
          <TreeView
            root={root}
            base={root[item]}
            data={data}
            spacing={spacing + 1}
            hoverOn={hoverOn}
            setHoverOn={setHoverOn}
            indicator={true}
            toggleModalSettings={toggleModalSettings}
            toggleModalCreate={toggleModalCreate}
          />
        ) : (
          () => (spacing = 0)
        )}
      </Fragment>
    )
  })

export default TreeView
