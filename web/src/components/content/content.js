import React from 'react'

const Content = ({ padding = 4, className, children }) => {
  return (
    <div
      className={`p-${padding} my-2 overflow-hidden bg-white border border-gray-300 rounded-lg hover:shadow active:shadow-xl
      ${className ? ' ' + className : null}`}
    >
      {children}
    </div>
  )
}

export default Content
