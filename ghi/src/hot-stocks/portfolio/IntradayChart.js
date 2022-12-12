import { Box } from '@mui/system';
import React from 'react';
import Plot from 'react-plotly.js';
import { ErrorNotification } from '../../common/ErrorNotification';
import { SmallLoading } from '../../common/Loading';
import { useGetStockQuery } from '../../rtk-files/stocksApi';

export function IntradayChart(props) {
    const symbol = props.symbol;
    const { data: stockData, isLoading: stockLoading, isError: stockError } = useGetStockQuery(symbol);
    return (
        <>
            {
                stockLoading ?
                    <Box
                        component="main"
                        sx={{ flexGrow: 2, p: 3 }}>
                        <SmallLoading />
                    </Box>
                    :
                    stockError ?
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, p: 3 }}>
                            <ErrorNotification error={"Chill out! It's a little too hot in here."} />
                        </Box> :
                        stockData?.stock ?
                            <Box>
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
                            </Box> : <></>
            }
        </>
    )
};
