import React, { useState } from 'react'
import './IconButton.css'
function IconButton({text,icon,status,like}) {

  let {upvote}=like || false;
  
  
  let suffix;
  if (text === "Edit") {
    suffix = "ed";
  }
  else {
    suffix = "d";
  }

  return (
    <button className="button_main light" onClick={status} id={text}>
      {`${text}${text==="Like" ? suffix : ''}`}
      <i className={`fa-${text==="Like" ? 'solid' : 'regular'} fa-${icon} ${upvote ? 'liked' : ''} light`}></i>
    </button>

  )
}

export default IconButton
