import * as React from 'react';
import { SimpleCard } from './SimpleCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export function CardList(props) {

  const cards = props.cards;
  const type = props.type;

  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              type == 'SAVED' ?
                card.preference ?
                  <Grid item key={type + index} xs={12} sm={6} md={4}>
                    <SimpleCard card={card} type={type} />
                  </Grid> :
                  <></> :
              type == 'PORTFOLIO' ?
                card.num_shares ?
                  <Grid item key={type + index} xs={12} sm={6} md={4}>
                    <SimpleCard card={card} type={type} />
                  </Grid> :
                  <></> :
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <SimpleCard card={card} />
                  </Grid>
            ))}
          </Grid>
        </Container>
  );
}
