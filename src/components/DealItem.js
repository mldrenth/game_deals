import React from 'react'

const DealItem = ({deal}) => {

    return (
    <>
            < tr>
            <td>{deal.storeID}</td>
            <td>{deal.retailPrice}</td>
            <td>{deal.price}</td>
            <td><a href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}>See Deal</a></td>
            </tr>
        </>
    )

}

export default DealItem