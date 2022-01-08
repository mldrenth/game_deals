import React from "react";
import ListItem from "./ListItem";

const GameDealsList = ({gameDeals, onDealClick}) => {
    
    const gameDealsItems = gameDeals.map((deal, index) => {
        return <ListItem deal={deal} key={index} onDealClick={onDealClick} />
    })

    return (
        <div>
            <table>
            <tr>
                <th>Title</th>
                <th>Normal Price</th>
                <th>Sale Price</th>
                <th>More Info</th>
            </tr>
                {gameDealsItems}
            </table>
        </div>
    )
}

export default GameDealsList;