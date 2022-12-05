import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { togglePortfolioDialog } from '../rtk-files/portfolioDialogSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import NextWeekOutlinedIcon from '@mui/icons-material/NextWeekOutlined';
import { useCreateOrUpdatePortfolioStockMutation } from '../rtk-files/portfolioStocksApi';
import { deepOrange } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import { useLazyGetStockQuery, useGetStockQuery } from '../rtk-files/stocksApi';
import CircularProgress from '@mui/material/CircularProgress';


export function PortfolioDialog() {

  const { portfolioDialog, card } = useSelector(state => state.portfolioDialog);
  const [createOrUpdatePortfolioStock, { error: portfolioStockError }] = useCreateOrUpdatePortfolioStockMutation();
  const dispatch = useDispatch();
  const [numShares, setNumShares] = useState('');
  // const [costCurrent, setCostCurrent] = useState('');
  // const [triggerStock, {data: stockData, error: stockError, isLoading: stockLoading }] = useLazyGetStockQuery();
  // const {data: stockData, error: getStockError, isLoading: getStockLoading } = useGetStockQuery(card.symbol);
  const [dialogContentText, setDialogContentText] = useState(<CircularProgress />);
  const { queries } = useSelector(state => state.stocks);

  if (card) {
    const queryName = `getStock("${card.symbol}")`;

    console.log(queries);
    console.log(Object.keys(queries));
    console.log(queries.hasOwnProperty(queryName));
    console.log(queryName);
    console.log(queries[queryName]);
  }


  // if (portfolioDialog && card) {
  //   triggerStock(card.symbol);
  // }

  // useEffect(() => {
  //   const fetchStock = async () => {
  //     triggerStock(card.symbol);
  //   }
  //   fetchStock();
  // }, []);

  // setCostCurrent(Object.values(stockData.stock)[0]);

  // { portfolioDialog ?
  //   // console.log(queries[`getStock("${card.symbol}")`]) :
  //   // console.log(Object.values(queries[`getStock("${card.symbol}")`].data.stock)[0]) :
  //   // console.log(null);
  //   triggerStock('AAPL'):
  //   // console.log('portdial'):
  //   console.log('no portdial');
  // }

  // if (stockData.stock != null) {
  //   setCostCurrent(Object.values(stockData.stock)[0]);
  // }

  let cost_current = 0;

  // if (getStockLoading) {
  //   console.log('loading');
  // } else {
  //   if (stockData.stock != null) {
  //     cost_current = Object.values(stockData.stock)[0];
  //     console.log(cost_current);
  //   }
  // }

  return (
      card ?
      // dispatch(triggerStock(card.symbol)) :
      // stockLoading ?
      // 'Loading' :
      // stockData ?
        // <>
        <Dialog open={portfolioDialog} onClose={() => dispatch(togglePortfolioDialog())}>
          <DialogTitle>{card.symbol}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{color: deepOrange[500]}}>
              {
                card.cost_current ?
                'C $' + card.cost_current :

                // stockLoading ?
                // 'Loading' :

                cost_current != 0 ?
                // Object.values(stockData.stock)[0] :
                // console.log(Object.values(stockData.stock)[0]) :
                'C $' + cost_current :
                // console.log(stockData.stock):
                // console.log(stockData.hasOwnProperty('stock')):
                'No current cost data'

              }
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              onChange={e => setNumShares(e.target.value)}
              value={numShares}
              id="numShares"
              label="Number of shares"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <IconButton onClick={() => dispatch(togglePortfolioDialog())}><ClearOutlinedIcon /></IconButton>
            <IconButton onClick={
              () => dispatch(togglePortfolioDialog()
              , createOrUpdatePortfolioStock({symbol: card.symbol, num_shares: numShares, cost_basis: '150'  }) //cost_current
              , setNumShares(''))
              }><NextWeekOutlinedIcon />
            </IconButton>
          </DialogActions>
        </Dialog> :
        <></>
  );
}
