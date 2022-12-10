import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { deepOrange } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IntradayChartButton, PortfolioStockButton, PrefFalseSavedNewsItemButton, PrefFalseSavedStockButton, PrefTrueSavedNewsItemButton, PrefTrueSavedStockButton } from './SimpleButtons';


export function SimpleCard(props) {

  const card = props.card;
  const type = props.type;
  const { queries } = useSelector(state => state.stocks);

  return (
    <>
      {card.symbol ?
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {card.name}
              {card.num_shares ? card.num_shares + ' sh' : null}
            </Typography>
            <Typography variant="h5" component="div">
              {card.symbol}
            </Typography>
            <Typography sx={{ color: deepOrange[500] }}>
              {
                card.cost_current ?
                  'C $' + card.cost_current :
                  queries[`getStocks(undefined)`]?.data?.stocks.find(element => element.symbol === card.symbol)?.cost_current ?
                    'C $' + queries[`getStocks(undefined)`].data.stocks.find(element => element.symbol === card.symbol).cost_current :
                    'Loading...'
              }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {card.cost_basis ?
                'B $' + card.cost_basis :
                <></>
              }
            </Typography>
          </CardContent>
          <CardActions>
            {type === 'SAVED' ?
              <PrefFalseSavedStockButton card={card} /> :
              <PrefTrueSavedStockButton card={card} />
            }
            <PortfolioStockButton card={card} />
            {type === 'PORTFOLIO' ?
              <IntradayChartButton card={card} /> :
              <></>
            }
          </CardActions>
        </Card> :

        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Link href={card.news_url} color="text.primary" underline="none" variant="h7">
              {card.title.slice(0, 40)}...
            </Link>
            <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
              {card.time_published}
            </Typography>
          </CardContent>
          <CardActions>
            {type === 'SAVED' ?
              <PrefFalseSavedNewsItemButton card={card} /> :
              <PrefTrueSavedNewsItemButton card={card} />
            }
          </CardActions>
        </Card>
      }
    </>

  );
}
