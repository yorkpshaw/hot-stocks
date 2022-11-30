import * as React from 'react';
import { useCreatePortfolioStockMutation, useDeletePortfolioStockMutation, useGetPortfolioStocksQuery, useUpdatePortfolioStockMutation } from '../rtk/portfolioStocksApi';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import QuoteAndChart from '../common/QuoteAndChart';

export function Portfolio(props) {

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
