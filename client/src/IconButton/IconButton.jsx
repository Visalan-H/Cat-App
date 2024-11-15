import React,{useState} from 'react'
import './IconButton.css'
function IconButton({ text, icon, status, vote}) {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  }

  let clbfn = (status)?status:handleLike;  
  let isActive;

  if (vote) isActive = (text === "Upvote") ? vote.upvote : vote.downvote;
  
  else isActive=like;

  let suffix = (text === "Edit") ? "ed" : "d";

  return (
    <button className="button_main light" onClick={clbfn} id={text}>
      {`${text}${isActive ? suffix : ''}`}
      <i className={`fa-${isActive ? 'solid' : 'regular'} fa-${icon} ${isActive ? 'liked' : ''} light`}></i>
    </button>

  )
}

export default IconButton
