import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import './Home.css'

function Home() {

    const [loading, setLoading] = useState(true);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://${window.location.hostname}:3000/cats`)
            .then((res) => {
                setCards(res.data.data);
                setLoading(false);
            })
            .catch((err) => console.log(err))
    }, [])

    const renderCards = () => {
        return cards.map((card, i) => (
            <Card key={card._id} n={i} name={card.name} description={card.description} image={card.image} />
        ))
    };
    return (
        <div >
            <Header />
            {loading ? <Loading />
                : <div className='cards light'>{renderCards()}</div>}
        </div>
    )
}

export default Home
