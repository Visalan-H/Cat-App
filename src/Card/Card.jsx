import React from 'react'
import './Card.css'
import IconButton from '../IconButton/IconButton'

function Card(props) {
    return (
        <div className="card_main light">
            <div className="image">
                <img src={`cats/cat.${props.n}.jpg`} alt="cat" />
            </div>
            <div className="content">
                <h3 className='light'>Cat {(props.n) + 1}</h3>
                <p className='light'>Very grumpy and violent</p>
                <div className="interactions">
                    <IconButton text="Like" icon="heart" />
                    <IconButton text="Share" icon="paper-plane" />
                    <IconButton text="Edit" icon="pen-to-square" />

                </div>
                <div className="actions">
                    <button className='up'>Upvote</button>
                    <button className='down'>Downvote</button>
                </div>
            </div>
        </div>

    )
}

export default Card
