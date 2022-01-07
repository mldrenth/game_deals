import React from "react";
import ListItem from "./ListItem";

const GameDealsList = ({gameDeals}) => {
    
    const gameDealsItems = gameDeals.map((deal, index) => {
        return <ListItem deal={deal} key={index} />
    })

    return (
        <div>
            <ul>
                {gameDealsItems}
            </ul>
        </div>
    )
}

export default GameDealsList;