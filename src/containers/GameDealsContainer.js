import React, {useState, useEffect} from 'react';
import GameDealsList from '../components/GameDealsList';
import GameDealsSearchForm from '../components/GameDealsSearchForm';

const GameDealsContainer = () => {
    const [gameDeals, setGameDeals] = useState([])
    const [titleSearch, settitleSearch] = useState("")

    useEffect(() => {
        getDeals();
    }, [titleSearch])

    const url = "https://www.cheapshark.com/api/1.0/deals?title="
    let wholeUrl = url + titleSearch
    console.log(wholeUrl)
    

    const getDeals = () => {
        console.log(wholeUrl);
        fetch(wholeUrl)
        .then(result => result.json())
        .then(deals => setGameDeals(deals))
    }
    const onTitleSearch = (searchTerm) => {
        settitleSearch(searchTerm)
        console.log(titleSearch)
    }

    return (
        <>
        <GameDealsSearchForm onTitleSearch={onTitleSearch}/>
        {gameDeals ? <GameDealsList gameDeals={gameDeals}/>
        :null}
        </>
    )

}

export default GameDealsContainer;