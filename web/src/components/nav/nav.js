import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ tabs = [] }) => {
  return (
    <section className='nav'>
      {tabs.map(
        ({ title, icon, path, is_label, is_active }) =>
          is_label ? (
            <div className='label'>{title}</div>
          ) : (
            <NavLink to={path} className='tab' activeClassName='active'>
              <m-icon>{icon}</m-icon> {title}
            </NavLink>
          )
      )}
    </section>
  )
}

export default Nav
