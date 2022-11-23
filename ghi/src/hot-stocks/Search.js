import * as React from 'react';
import { useState } from 'react';
import { useAuthContext } from "../accounts/Auth";

import { ErrorNotification } from '../common/ErrorNotification';
import { Copyright } from '../common/Copyright';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { ContentCard } from '../common/ContentCard';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const theme = createTheme();

export function Search() {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const { token } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="s">
        <CssBaseline />
        <Box
          sx={{
            marginTop: -6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ErrorNotification error={error} />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              id="search"
              label="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              variant="outlined"
              autoFocus
              sx={{ mt: 2, mb: 3, width: '50ch' }}/>
            <IconButton
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, ml: 2.5, bgcolor: deepOrange[500] }}>
              <SearchOutlinedIcon />
            </IconButton>
            <Grid container>
              <Grid item>
                <ContentCard />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
