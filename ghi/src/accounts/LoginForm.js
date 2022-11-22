import * as React from 'react';
import { useState } from 'react';
import { useCreateAccountMutation } from '../store/accountsApi';
import { useToken } from "../accounts/AuthProvider";

import { ErrorNotification } from '../common/ErrorNotification';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Hot Stocks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export function LoginForm() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [createAccount, result] = useCreateAccountMutation();
  const [error, setError] = useState('');
  const [token, login] = useToken();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  if (result.isSuccess) {
    navigate("/portfolio");
  } else if (result.isError) {
    setError(result.error);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
            <LocalFireDepartmentOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <ErrorNotification error={error} />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              id="username"
              label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              variant="outlined"
              required />
            <TextField
              id="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
              variant="outlined"
              required />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: deepOrange[500] }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
