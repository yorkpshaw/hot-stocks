import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import NextWeekOutlinedIcon from '@mui/icons-material/NextWeekOutlined';
import { deepOrange } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePortfolioDialog } from '../rtk-files/portfolioDialogSlice';
import { useCreateOrUpdatePortfolioStockMutation } from '../rtk-files/portfolioStocksApi';


export function PortfolioDialog() {

  const { card } = useSelector(state => state.portfolioDialog);
  const [createOrUpdatePortfolioStock] = useCreateOrUpdatePortfolioStockMutation();
  const dispatch = useDispatch();
  const [numShares, setNumShares] = useState('');
  const { queries } = useSelector(state => state.stocks);

  return (
    card ?
      <Dialog open={true} onClose={() => dispatch(togglePortfolioDialog())}>
        <DialogTitle>{card.symbol}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: deepOrange[500] }}>
            {
              card.cost_current ?
                'C $' + card.cost_current :
                queries[`getStocks(undefined)`]?.data?.stocks.find(element => element.symbol === card.symbol)?.cost_current ?
                  'C $' + queries[`getStocks(undefined)`].data.stocks.find(element => element.symbol === card.symbol).cost_current :
                  'Loading...'
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
            () => dispatch(
              togglePortfolioDialog()
              , createOrUpdatePortfolioStock({ symbol: card.symbol, num_shares: numShares, cost_basis: card.cost_current ? card.cost_current : queries[`getStocks(undefined)`]?.data?.stocks.find(element => element.symbol === card.symbol)?.cost_current ? queries[`getStocks(undefined)`].data.stocks.find(element => element.symbol === card.symbol).cost_current : 0 })
              , setNumShares(''))
          }><NextWeekOutlinedIcon />
          </IconButton>
        </DialogActions>
      </Dialog> :
      <></>
  );
}
