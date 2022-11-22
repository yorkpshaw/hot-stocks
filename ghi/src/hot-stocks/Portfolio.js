import * as React from 'react';
import { useGetPortfolioStocksQuery } from '../store/portfolioStocksApi';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


export function Portfolio(props) {

    const { data, error, isLoading } = useGetPortfolioStocksQuery;

    if (isLoading) {
        return (
            <CircularProgress color="inherit" />
        )
    }

    return (
        <div>
            <Alert variant="outlined" severity="error">
                {error}
            </Alert>
            <div>
                {data.portfolioStocks.map(portfolioStock => {
                    <p key={portfolioStock.id}>
                        {portfolioStock.symbol}
                    </p>
                })}
            </div>
        </div>
      );
}
