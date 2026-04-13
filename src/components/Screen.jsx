import React from 'react'

const Screen = ({value = 0}) => {
  return (
    <div id="screen">
      <div id="screen-content">{value}</div>
    </div>
  )
}

export default Screen