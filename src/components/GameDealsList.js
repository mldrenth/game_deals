import React from "react";
import ListItem from "./ListItem";

const GameDealsList = ({gameDeals, onDealClick}) => {
    
    const gameDealsItems = gameDeals.map((deal, index) => {
        return <ListItem deal={deal} key={index} onDealClick={onDealClick} />
    })

    return (
        <div>
            <table className="min-w-full divide-y divide-orange-200 border-solid border-2 border-orange-200">
                <thead className="bg-orange-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Normal Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Sale Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">More Info</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-orange-200">
                {gameDealsItems}
                </tbody>
            </table>
        </div>
    )
}

export default GameDealsList;