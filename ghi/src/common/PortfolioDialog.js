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


export function PortfolioDialog() {

  const { portfolioDialog, card } = useSelector(state => state.portfolioDialog);
  const [createOrUpdatePortfolioStock, { error }] = useCreateOrUpdatePortfolioStockMutation();
  const dispatch = useDispatch();

  return (
    <>
    {
      card ?
        <>
        <Dialog open={ portfolioDialog } onClose={() => dispatch(togglePortfolioDialog())}>
          <DialogTitle>{ card.symbol }</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{color: deepOrange[500]}}>
              C ${ card.cost_current }
              {/* TODO will need to hit get_stock api endpoint */}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="numShares"
              label="Number of shares"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <IconButton onClick={() => dispatch(togglePortfolioDialog())}><ClearOutlinedIcon /></IconButton>
            <IconButton onClick={() => dispatch(togglePortfolioDialog())}><NextWeekOutlinedIcon /></IconButton>
            {/* TODO need to also create or update portfolio stock */}
          </DialogActions>
        </Dialog>
      </> :
      <></>
    }
  </>
  );
}
