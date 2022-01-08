import React from 'react';
import DealItem from './DealItem';

const GameInfoDealsTable = ({chosenGame}) => {

    const gameDealsItems = chosenGame.deals.map((deal, index) => {
        return <DealItem deal={deal} key={index} dealIndex={index}/>
    })
    
    return (
        <div>
            <table>
            <tr>
                <th>Store</th>
                <th>Normal Price</th>
                <th>Sale Price</th>
                <th>Get the Deal</th>
            </tr>
                {gameDealsItems}
            </table>
        </div>
    )
}

export default GameInfoDealsTable