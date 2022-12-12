import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShareDialog } from '../rtk-files/shareDialogSlice';
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export function ShareDialog() {

  const { card } = useSelector(state => state.shareDialog);
  const dispatch = useDispatch();


  return (
    card ?
      <Dialog open={true} onClose={() => dispatch(toggleShareDialog())}>
        {card?.symbol ?
          <>
            <DialogTitle>
              Let Your Friends Know What You're Doing!
            </DialogTitle>

            <DialogActions>
              <IconButton><FacebookOutlinedIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
              <IconButton><InstagramIcon /></IconButton>

            </DialogActions>
          </> :
          <></>}
      </Dialog> :
      <></>
  );
}
