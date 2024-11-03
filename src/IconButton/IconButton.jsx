import React,{useState} from 'react'
import './IconButton.css'
function IconButton(props) {

  const [like,setLike]=useState(false);

  const handleClick=()=>setLike(!like);  
  let suffix;
  if (props.text === "Edit") {
    suffix="ed";
  }
  else{
    suffix="d";
  }

  return (
      <button className="button_main light" onClick={handleClick}>
          {`${props.text}${like?suffix:''}`}
          <i className={`fa-${like?'solid':'regular'} fa-${props.icon} ${like?'liked':''} light`}></i>
      </button>

  )
}

export default IconButton
