import React, {useState, useEffect} from 'react';
import GameDealsList from '../components/GameDealsList';

const GameDealsContainer = () => {
    const [gameDeals, setGameDeals] = useState([])

    useEffect(() => {
        getDeals(wholeUrl);
    },[])

    const searchTerm = "mass effect"
    const url = "https://www.cheapshark.com/api/1.0/deals?title="
    let wholeUrl = url + searchTerm
    console.log(wholeUrl)
    

    const getDeals = (wholeUrl) => {
        console.log(wholeUrl);
        fetch(wholeUrl)
        .then(result => result.json())
        .then(deals => setGameDeals(deals))
    }

    return (
        <GameDealsList gameDeals={gameDeals}/>
    )

}

export default GameDealsContainer;