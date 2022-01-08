import React, {useState, useEffect} from 'react';
import GameDealsList from '../components/GameDealsList';
import GameDealsSearchForm from '../components/GameDealsSearchForm';
import GameInfo from '../components/GameInfo';
import './GameDealsContainer.css'

const GameDealsContainer = () => {
    const [gameDeals, setGameDeals] = useState([])
    const [titleSearch, settitleSearch] = useState("")
    const [chosenGame, setChosenGame] = useState(null)

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

    const onDealClick = (deal) => {
        fetch("https://www.cheapshark.com/api/1.0/games?id=" + deal.gameID)
        .then(result => result.json()
        .then(game => setChosenGame(game)))
    }

    return (
        <>
        <GameDealsSearchForm onTitleSearch={onTitleSearch}/>
        <div id="games-container">
        {gameDeals ? <GameDealsList gameDeals={gameDeals} onDealClick={onDealClick}/>
        : null}
        {chosenGame ? <GameInfo chosenGame={chosenGame}/>
        : null}Ï
        </div>
        </>
    )

}

export default GameDealsContainer;