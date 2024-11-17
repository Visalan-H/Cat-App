import React, { useState } from 'react'
import './Card.css'
import IconButton from '../IconButton/IconButton'

function Card(props) {

    const [vote, setVote] = useState({ upvote: false, downvote: false });
    const handleVote = (e) => {
        setVote(e.target.parentElement.id === "Upvote" ? { upvote: !vote.upvote, downvote: false } : { downvote: !vote.downvote, upvote: false });
    };

    const [flip, setFlip] = useState(false);

    const handleFlip = () => {
        setFlip(!flip);
    }

    return (
        <div className='mainmain'>
            <div className={`card_main light ${flip ? "flip" : ""}`}>
                <div className='front'>
                    <div className="image">
                        <img src={`cats/cat.${props.n}.jpg`} alt="cat" />
                    </div>
                    <div className="content">
                        <h3 className='light'>{props.name}</h3>
                        <p className='light'>{props.description}</p>
                        <div className="interactions">
                            <IconButton text="Like" icon="heart" />
                            <IconButton text="Share" icon="paper-plane" />
                            <IconButton text="Comment" icon="message" status={handleFlip} />
                        </div>
                        <div className="actions">
                            <IconButton text="Upvote" icon="thumbs-up" status={handleVote} vote={vote} />
                            <IconButton text="Downvote" icon="thumbs-down" status={handleVote} vote={vote} />
                        </div>
                    </div>
                </div>
                <div className="back">
                    <div className="backhead">
                        <h3>Comments</h3>
                        <i className="fa-solid fa-xmark" onClick={handleFlip}></i>
                        <div className="line"></div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card
