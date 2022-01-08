import React from "react";
import GameInfoDealsTable from "./GameInfoDealsTable";

const GameInfo = ({chosenGame}) => {
    
    return (
        <div>
            <h2>Game Info</h2>
            <p>{chosenGame.info.title}</p>
            <p> Cheapest Price Ever: {chosenGame.cheapestPriceEver.price}</p>
            <p> All Current Deals:</p>
            <GameInfoDealsTable chosenGame={chosenGame}/>
        </div>
    )
}

export default GameInfo