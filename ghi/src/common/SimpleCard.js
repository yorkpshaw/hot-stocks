import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useCreateOrUpdateSavedStockMutation } from '../rtk-files/savedStocksApi';
import { useCreateOrUpdateSavedNewsItemMutation } from '../rtk-files/savedNewsItemsApi';
import { PortfolioStockButton, PrefTrueSavedNewsItemButton, PrefFalseSavedNewsItemButton, PrefTrueSavedStockButton, PrefFalseSavedStockButton } from './Buttons';


export function SimpleCard(props) {

  const card = props.card;
  const type = props.type;

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
                <PrefFalseSavedStockButton card={ card }/>:
                <PrefTrueSavedStockButton card={ card }/>
              }
              <PortfolioStockButton card={ card }/>
            </> :
            <>
              { type == 'SAVED' ?
                <PrefFalseSavedNewsItemButton card={ card }/>:
                <PrefTrueSavedNewsItemButton card={ card }/>
              }
            </>
          }

        </CardActions>
      </Card>
  );
}
