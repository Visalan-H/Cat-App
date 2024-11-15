import { useEffect } from 'react';
import './App.css'
import Card from './Card/Card'
import Header from './Header/Header'
// import axios from 'axios'
function App() {

  const renderCards = () => {
    let cards = [];

    for (let i = 0; i < 100; i++) {
      cards.push(<Card key={i} n={i} />);
    }
    return cards;
  };

  // useEffect(()=>{
  //   axios.get('localhost/cats');
  // },[])

  return (
    <>
      <Header />
      <div className="cards light">
        {renderCards()}
      </div>
    </>
  )
}

export default App
