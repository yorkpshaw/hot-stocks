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
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useSelector } from 'react-redux';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import NextWeekOutlinedIcon from '@mui/icons-material/NextWeekOutlined';
import { useCreateOrUpdatePortfolioStockMutation } from '../rtk-files/portfolioStocksApi';


export function PortfolioDialog(props) {

  const { portfolioDialog } = useSelector(state => state.portfolioDialog);
  const [createOrUpdatePortfolioStock, { error }] = useCreateOrUpdatePortfolioStockMutation();
  const dispatch = useDispatch();
  const card = props.card;

  return (
    <div>
      <IconButton onClick={() => dispatch(togglePortfolioDialog())}>
        <WorkOutlineOutlinedIcon />
      </IconButton>
      <Dialog open={portfolioDialog} onClose={() => dispatch(togglePortfolioDialog())}>
        <DialogTitle>{ card.symbol }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            B ${ card.cost_basis }
            {/* TODO should be cost_current, will need to hit get_stock api endpoint */}
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
    </div>
  );
}
