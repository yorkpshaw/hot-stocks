import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Hot Stocks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
