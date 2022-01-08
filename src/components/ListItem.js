import React from 'react';

const ListItem = ({deal, onDealClick}) => {

    const handleClick = () => {
        onDealClick(deal);
    }
    
    return (
        <>
            < tr>
            <td>{deal.title}</td>
            <td>{deal.normalPrice}</td>
            <td>{deal.salePrice}</td>
            <td onClick={handleClick}>More Info</td>
            </tr>
        </>
    )

}

export default ListItem