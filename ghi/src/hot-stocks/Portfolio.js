import * as React from 'react';
import { useCreatePortfolioStockMutation, useDeletePortfolioStockMutation, useGetPortfolioStocksQuery, useUpdatePortfolioStockMutation } from '../rtk/portfolioStocksApi';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import QuoteAndChart from '../portfolio/QuoteAndChart';
import { SimpleCard,  } from '../common/SimpleCard';
import { getTotalPortfolioValue } from '../portfolio/GetTotalPortfolioValue';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

export function Portfolio(props) {
    const { portfolio } = useSelector(state => state.local)
    const [getTotalPortfolioValue, setTotalPortfolioValue] = useState(0);


    useEffect(() => {
        if(portfolio.length > 0) {
            setTotalPortfolioValue(getTotalPortfolioValue(portfolio));
        }
    }, [portfolio]);

  const { data, error, isLoading } = useGetPortfolioStocksQuery();
  // const [createPortfolioStock, result] = useCreatePortfolioStockMutation();
  // const [updatePortfolioStock, result] = useUpdatePortfolioStockMutation();
  // const [deletePortfolioStock, result] = useDeletePortfolioStockMutation();

  if (isLoading) {
    return (
      <CircularProgress color="inherit" />
    );
  }

  return (
    <div>
      {/* <Alert variant="outlined" severity="error">
                {error}
            </Alert> */}
      {/* <div>
                {data.portfolioStocks.map(portfolioStock => {
                    <p key={portfolioStock.id}>
                        {portfolioStock.symbol}
                    </p>
                })}
            </div> */}
      <div>
        <QuoteAndChart />
      </div>
    </div>
  );
}
