import React from 'react';

const ListItem = ({deal, onDealClick}) => {

    const handleClick = () => {
        onDealClick(deal);
    }
    
    return (
        <>
            < tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.normalPrice}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.salePrice}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer" onClick={handleClick}>More Info</td>
            </tr>
        </>
    )

}

export default ListItem