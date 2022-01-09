import React from 'react'


const DealItem = ({deal}) => {


    return (
    <>
            < tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.storeID}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.price}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-orange-500"><a href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}>See Deal</a></td>
            </tr>
            
        </>
    )

}

export default DealItem