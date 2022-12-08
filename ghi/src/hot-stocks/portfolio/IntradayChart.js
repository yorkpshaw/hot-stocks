import React from 'react';
import Plot from 'react-plotly.js';
import { useGetStockQuery } from '../../rtk-files/stocksApi';

export function IntradayChart(props) {
    const symbol = props.symbol;
    const { data: stockData, isLoading: stockLoading } = useGetStockQuery(symbol);
    return (
        <>
            {
                stockLoading ?
                    'Loading' :
                    stockData?.stock ?
                        <div>
                            <Plot
                                data={[
                                    {
                                        x: Object.keys(stockData?.stock),
                                        y: Object.values(stockData?.stock),
                                        type: 'scatter',
                                        mode: 'lines+markers',
                                        marker: { color: 'red' },
                                    },
                                ]}
                                layout={{
                                    width: 400,
                                    height: 350
                                }}
                            />
                        </div> : <></>
            }
        </>
    )
};
