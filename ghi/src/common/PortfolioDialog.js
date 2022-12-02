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
import { useLazyGetStockQuery } from '../rtk-files/stocksApi';
import CircularProgress from '@mui/material/CircularProgress';


export function PortfolioDialog() {

  const { portfolioDialog, card } = useSelector(state => state.portfolioDialog);
  const { queries } = useSelector(state => state.stocks);
  const [createOrUpdatePortfolioStock, { error: portfolioStockError }] = useCreateOrUpdatePortfolioStockMutation();
  const dispatch = useDispatch();
  const [numShares, setNumShares] = useState('');
  const [costCurrent, setCostCurrent] = useState('');
  const [triggerStock, {data: stockData, error: getStockError, isLoading: getStockLoading }] = useLazyGetStockQuery();
  const [dialogContentText, setDialogContentText] = useState(<CircularProgress />);

  useEffect(() => {
    if (card) {
      triggerStock(card.symbol);
      setDialogContentText(
        <DialogContentText sx={{color: deepOrange[500]}}>
          C $ {
            card.cost_current ?
            card.cost_current :

            getStockLoading ?
            'Loading' :

            stockData ?
            // Object.values(stockData.stock)[0] :
            // console.log(Object.values(stockData.stock)[0]) :
            console.log(stockData):
            // console.log(stockData.hasOwnProperty('stock')):
            'No data'

          }
          {/* TODO will need to hit get_stock api endpoint */}
        </DialogContentText>
      );
    }
  }, []);

  // setCostCurrent(Object.values(stockData.stock)[0]);

  // { portfolioDialog ?
  //   // console.log(queries[`getStock("${card.symbol}")`]) :
  //   // console.log(Object.values(queries[`getStock("${card.symbol}")`].data.stock)[0]) :
  //   // console.log(null);
  //   triggerStock('AAPL'):
  //   // console.log('portdial'):
  //   console.log('no portdial');
  // }

  return (
    <>
    {
      card ?
        <>
        <Dialog open={portfolioDialog} onClose={() => dispatch(togglePortfolioDialog())}>
          <DialogTitle>{card.symbol}</DialogTitle>
          <DialogContent>
            {dialogContentText}
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
              , createOrUpdatePortfolioStock({symbol: card.symbol, num_shares: numShares, cost_basis: 150  })
              , setNumShares(''))
              }><NextWeekOutlinedIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </> :
      <></>
    }
  </>
  );
}
