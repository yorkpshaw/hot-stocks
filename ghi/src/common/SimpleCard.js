import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { deepOrange } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { preventDefault } from '../common/utils';
import { useCreateOrUpdateSavedStockMutation } from '../rtk-files/savedStocksApi';
import { useCreateOrUpdateSavedNewsItemMutation } from '../rtk-files/savedNewsItemsApi';
import { togglePortfolioDialog } from '../rtk-files/portfolioDialogSlice';
import { useDispatch } from 'react-redux';
import { PortfolioDialog } from './PortfolioDialog';


export function SimpleCard(props) {

  const card = props.card;
  const type = props.type;
  const [createOrUpdateSavedStock, { error: savedStockError, isLoading: savedStockLoading }] = useCreateOrUpdateSavedStockMutation();
  const [createOrUpdateSavedNewsItem, { error: savedNewsItemError, isLoading: savedNewsItemLoading }] = useCreateOrUpdateSavedNewsItemMutation();
  const dispatch = useDispatch();


  return (
    <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          { card.symbol ?
            <>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {card.name }
                { card.num_shares ?
                  card.num_shares + ' sh' :
                  <></>
                }
              </Typography>
              <Typography variant="h5" component="div">
                {card.symbol}
              </Typography>
              <Typography sx={{color: deepOrange[500]}}>
                { card.cost_current ?
                  'C $' + card.cost_current :
                  <></>
                }
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { card.cost_basis ?
                  'B $' + card.cost_basis :
                  <></>
                }
              </Typography>
            </> :
            <>
              <Link href={card.news_url} color="text.primary" underline="none" variant="h7">
                {card.title.slice(0,40)}...
              </Link>
              <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                {card.time_published}
              </Typography>
            </>
            }
        </CardContent>
        <CardActions>
          { card.symbol ?
            <>
              { type == 'SAVED' ?
                <IconButton onClick={preventDefault(createOrUpdateSavedStock, () => ( { symbol: card.symbol, preference: false } ))} value={card} size="small"><ClearOutlinedIcon /></IconButton> :
                <IconButton onClick={preventDefault(createOrUpdateSavedStock, () => ( { symbol: card.symbol, preference: true } ))} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
              }
              <PortfolioDialog />
            </> :
            <>
              { type == 'SAVED' ?
                <IconButton onClick={preventDefault(createOrUpdateSavedNewsItem, () => ( { title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: false } ))} value={card} size="small"><ClearOutlinedIcon /></IconButton> :
                <IconButton onClick={preventDefault(createOrUpdateSavedNewsItem, () => ( { title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: true } ))} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
              }
            </>
          }

        </CardActions>
      </Card>
  );
}
