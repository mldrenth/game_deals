import React from 'react';

const ListItem = ({deal}) => {
    
    return (
        <>
            <tr>
            <td>{deal.title}</td>
            <td>{deal.normalPrice}</td>
            <td>{deal.salePrice}</td>
            </tr>
        </>
    )

}

export default ListItem