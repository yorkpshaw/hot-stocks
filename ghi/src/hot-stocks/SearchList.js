import * as React from 'react';
import { useState } from 'react';

import { ErrorNotification } from '../common/ErrorNotification';
import { Copyright } from '../common/Copyright';
import { useNavigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { CardList } from '../common/CardList';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useGetTokenQuery } from '../RTK/apiSlice';


const theme = createTheme();

export function SearchList() {

  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  const cards_test = [1,2,3,4,5,6];

  return (
    <>
    {tokenLoading
      ? <CircularProgress />
      :
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
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
            <Box component="form"
              method="post"
              onSubmit={handleSubmit}
              noValidate sx={{ mt: 1 }}>
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
                size="large"
                sx={{ mt: 2.5, mb: 2, ml: 2.5, bgcolor: deepOrange[500] }}>
                <SearchOutlinedIcon />
              </IconButton>
              <CardList cards={cards_test}/>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    }
    </>
  );
}
