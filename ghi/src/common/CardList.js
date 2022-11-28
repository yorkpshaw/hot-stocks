import * as React from 'react';
import { SimpleCard } from './SimpleCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';




export function CardList(props) {

  const cards = props.cards;

  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <SimpleCard />
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}
