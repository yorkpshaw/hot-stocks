import { deepOrange } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';

export function ProgressBar() {
  return (
    <Box sx={{ marginTop: 1, width: '100%', color: deepOrange[500] }}>
      <LinearProgress color='inherit' />
    </Box>
  );
}
