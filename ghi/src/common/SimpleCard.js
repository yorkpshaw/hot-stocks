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
import { handlePortfolioClick, handleSavedClick, handleDeleteSavedClick } from '../common/utils';


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
              </Typography>
              <Typography variant="h5" component="div">
                {card.symbol}
              </Typography>
              <Typography sx={{color: deepOrange[500]}}>
                C $ {card.cost_current}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                B $ {card.cost_basis}
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
          { type == 'SAVED' ?
          <IconButton onClick={handleDeleteSavedClick} value={card} size="small"><ClearOutlinedIcon /></IconButton>:
          <IconButton onClick={handleSavedClick} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>}
          { card.symbol ?
            <IconButton onClick={handlePortfolioClick} value={card} size="small"><WorkOutlineOutlinedIcon /></IconButton> :
            <></>
          }

        </CardActions>
      </Card>
  );
}
