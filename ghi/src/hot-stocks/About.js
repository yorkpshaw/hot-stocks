import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { CssBaseline } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Copyright } from '../common/Copyright';


const theme = createTheme();

export function About() {

  const info = {
    'Explore': 'Our continuously evolving explore allows for you come across all stocks and finacial news articles that you will allow you to expand your portfolio in anyway that you choose',
    'Search': 'Discover stocks and financial news articles that may peak your interest by searching words that will match it to a stock or news article',
    'Saved': 'Not to sure if this is a stock that you want to add to your porfolio but it has your interest? You add it to the Saved Folder and comeback to it at any time!',
    'Portfolio': 'Portfolio will house all the stocks that you have shares in.',
  };


  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
            <LocalFireDepartmentOutlinedIcon />
          </Avatar>
          {/* <ErrorNotification error={error} /> */}
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column'
          }}>
          {Object.keys(info).map((key, index) => (
            <Box key={index}
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left'
              }}>
              <Typography component="h1" variant="h5">
                {key}
              </Typography>
              <Typography variant="body1">
                {info[key]}
              </Typography>
            </Box>
          ))}
          {/* <ErrorNotification error={error} /> */}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
