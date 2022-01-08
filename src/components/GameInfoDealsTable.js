import React from 'react';
import DealItem from './DealItem';
import GameChart from './GameChart';

const GameInfoDealsTable = ({chosenGame}) => {

    const gameDealsItems = chosenGame.deals.map((deal, index) => {
        return <DealItem deal={deal} key={index} dealIndex={index}/>
    })
    
    return (
        <div width="100vw">
            <table width="100%">
            <tr>
                <th>Store</th>
                <th>Normal Price</th>
                <th>Sale Price</th>
                <th>Get the Deal</th>
            </tr>
                {gameDealsItems}
            </table>
            <GameChart deals={chosenGame.deals}/>
        </div>
    )
}

export default GameInfoDealsTable