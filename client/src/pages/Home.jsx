import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';

function Home() {

    const [loading, setLoading] = useState(true);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get('http://192.168.1.7:3000/cats')
            .then((res) => {
                setCards(res.data.data);
                setLoading(false);
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const renderCards = () => {
        return cards.map((card,i)=>(
            <Card key={card._id} n={i} name={card.name} description={card.description} />
        ))
    };
    return (
        <div>
            <Header />
            {loading    ? <Loading /> 
                        : <div className='cards light'>{renderCards()}</div>}    
        </div>
    )
}

export default Home
