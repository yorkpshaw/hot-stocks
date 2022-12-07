import React from 'react';
import Plot from 'react-plotly.js';
import { useGetStockQuery } from '../rtk-files/stocksApi';

export function IntradayChart(props) {

    const symbol = props.symbol;
    const { data: stockData, isLoading: stockLoading } = useGetStockQuery(symbol);

    return (
        <>
        {stockData?.stock?
        <div>
            <h3> Daily 15 min price </h3>
            <Plot
                data={[
                    {
                    x: Object.keys(stockData?.stock),
                    y: Object.values(stockData?.stock),
                    type: 'scatter',
                    mode: 'lines+markers+text',
                    marker: {color: 'red'},
                },

                ]}
                layout={{
                    width: 400,
                    height: 400,
                    title: `Intraday 15 min ${symbol}`}}
            />
        </div>: 'loading...'
}
</>
    )
};