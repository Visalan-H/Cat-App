import React from 'react'
import './IconButton.css'
function IconButton(props) {
  return (
      <button className="button_main light">
          {props.text}
          <i className={`fa-regular fa-${props.icon}`}></i>
      </button>

  )
}

export default IconButton
