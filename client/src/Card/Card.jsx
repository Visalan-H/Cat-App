import React,{useState} from 'react'
import './Card.css'
import IconButton from '../IconButton/IconButton'

function Card(props) {
    const [vote, setVote] = useState({"upvote":false,"downvote":false});
    const handleVote = (e) => {
        setVote(e.target.parentElement.id === "Upvote" ? {upvote: true,downvote:false } : {downvote: true,upvote:false });
    };

    const [like,setLike]=useState()
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
                    <IconButton text="Upvote" icon="thumbs-up" status={handleVote} vote={vote}/>
                    <IconButton text="Downvote" icon="thumbs-down" status={handleVote} vote={vote} />
                </div>
            </div>
        </div>

    )
}

export default Card
