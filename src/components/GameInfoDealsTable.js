import React from 'react';
import DealItem from './DealItem';
import GameChart from './GameChart';

const GameInfoDealsTable = ({chosenGame}) => {

    const gameDealsItems = chosenGame.deals.map((deal, index) => {
        return <DealItem deal={deal} key={index} dealIndex={index}/>
    })
    
    return (
        <div >
            <table className='min-w-full divide-y divide-orange-200 border-solid border-2 border-orange-200'>
                <thead className='bg-orange-50'>
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Store</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Sale Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Get the Deal</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-orange-200">
                {gameDealsItems}
                </tbody>
            </table>
            <GameChart deals={chosenGame.deals}/>
        </div>
    )
}

export default GameInfoDealsTable