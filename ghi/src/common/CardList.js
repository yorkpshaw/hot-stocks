import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SimpleCard } from './SimpleCard';


export function CardList(props) {

  const cards = props.cards;
  const type = props.type;

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          type === 'SAVED' ?
            <Grid item key={type + index} xs={12} sm={6} md={4}>
              <SimpleCard card={card} type={type} />
            </Grid> :
            type === 'PORTFOLIO' ?
              <Grid item key={type + index} xs={12} sm={6} md={4}>
                <SimpleCard card={card} type={type} />
              </Grid> :
              <></>
        ))}
      </Grid>
    </Container>
  );
}
