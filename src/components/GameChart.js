import React from "react";
import { Chart } from "react-google-charts"

const GameChart = ({deals}) => {
    console.log(deals)
    const priceOverview = deals.map(deal => [deal.storeID, deal.price])

    const data = [
        ["Store","Price"],
        ...priceOverview
    ]

    const options = {
        chart: {
            title: "Price Overview"
        },
    };

    return (
        <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
        />
    )
}

export default GameChart