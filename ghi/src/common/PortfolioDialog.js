import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { togglePortfolioDialog } from '../rtk-files/portfolioDialogSlice';
import { useDispatch } from 'react-redux';


export function PortfolioDialog() {

  const { portfolioDialog } = useSelector(state => state.portfolioDialog);
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog open={open} onClose={() => dispatch(togglePortfolioDialog())}>
        <DialogTitle>Update portfolio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
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
          <Button onClick={() => dispatch(togglePortfolioDialog())}>Cancel</Button>
          <Button onClick={() => dispatch(togglePortfolioDialog())}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
