import React from 'react'

const CButton = ({ text, onClick }) => {
    
  return (
    <button className="c-btn" onClick={() => onClick(text)}>{text}</button>
  )
}

export default CButton
