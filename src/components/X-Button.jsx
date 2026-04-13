import React from 'react'

const XButton = ({text, onClick}) => {
  return (
    <button className="x-btn" onClick={() => onClick(text)}>{text}</button>
  )
}

export default XButton
