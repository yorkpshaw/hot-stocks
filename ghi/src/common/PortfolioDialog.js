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
  const [dialogContentText, setDialogContentText] = useState(<CircularProgress />);
  const { queries } = useSelector(state => state.stocks);

  return (
      card ?
        <Dialog open={true} onClose={() => dispatch(togglePortfolioDialog())}>
          <DialogTitle>{card.symbol}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{color: deepOrange[500]}}>
              {
                card.cost_current ?
                'C $' + card.cost_current :
                queries[`getStock("${card.symbol}")`].data?.stock ?
                'C $' + Object.values(queries[`getStock("${card.symbol}")`].data?.stock)[0] :
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
