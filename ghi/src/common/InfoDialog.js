import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { deepOrange } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInfoDialog } from '../rtk-files/infoDialogSlice';


export function InfoDialog() {

  const { card } = useSelector(state => state.infoDialog);
  const dispatch = useDispatch();
  const { queries: stocksQueries } = useSelector(state => state.stocks);
  const { queries: companiesQueries } = useSelector(state => state.companies);


  return (
    card ?
      <Dialog open={true} onClose={() => dispatch(toggleInfoDialog())}>
        {card?.symbol ?
          <>
            <DialogTitle>
              <DialogContentText>
                {card.name}
              </DialogContentText>
              {card.symbol}
              <DialogContentText sx={{ color: deepOrange[500] }}>
                {
                  card.cost_current ?
                    'C $' + card.cost_current :
                    stocksQueries[`getStocks(undefined)`]?.data?.stocks.find(element => element.symbol === card.symbol)?.cost_current ?
                      'C $' + stocksQueries[`getStocks(undefined)`].data.stocks.find(element => element.symbol === card.symbol).cost_current :
                      'Loading...'
                }
              </DialogContentText>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {
                  companiesQueries[`getCompany("${card?.symbol}")`]?.data?.company?.description ?
                    companiesQueries[`getCompany("${card.symbol}")`].data.company.description.toLowerCase() === 'none' ?
                      null :
                      companiesQueries[`getCompany("${card.symbol}")`].data.company.description :
                    'Loading...'
                }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <IconButton onClick={() => dispatch(toggleInfoDialog())}><ClearOutlinedIcon /></IconButton>
            </DialogActions>
          </> :
          <>
            <DialogTitle>
              <DialogContentText>
                <Link href={card.news_url} color="text.primary" underline="none" variant="h7">
                  {card.title?.slice(0, 40)}...
                </Link>
              </DialogContentText>
              <DialogContentText>
                {card.time_published}
              </DialogContentText>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {card.summary}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <IconButton onClick={() => dispatch(toggleInfoDialog())}><ClearOutlinedIcon /></IconButton>
            </DialogActions>
          </>}
      </Dialog> :
      <></>
  );
}
