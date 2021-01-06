import React from 'react'

const Filter = ({ checkName, checkChange }) => {
  return (
    <div>
      Filter shown with
      <input value={checkName} onChange={checkChange} />
    </div>
  )
}

export default Filter
