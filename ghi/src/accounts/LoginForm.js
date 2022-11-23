import * as React from 'react';
import { useState } from 'react';
import { useToken } from "../accounts/Auth";

import { ErrorNotification } from '../common/ErrorNotification';
import { Copyright } from '../common/Copyright';
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

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogInMutation } from '../store/apiSlice';
import { eventTargetSelector as target, preventDefault } from '../common/utils';
import { updateField } from '../slices/accountSlice';


const theme = createTheme();

export function LoginForm() {

  // const navigate = useNavigate();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [token, login] = useToken();

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   login(username, password);
  // }

  const dispatch = useDispatch();
  const { username, password } = useSelector(state => state.account);
  const [logIn, { error, isLoading: logInLoading }] = useLogInMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );


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
          <Box component="form" onSubmit={preventDefault(logIn, target)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              value={username}
              onChange={field}
              variant="outlined"
              autoFocus />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={field}
              type="password"
              autoComplete="current-password"
              variant="outlined"/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: deepOrange[500] }}>
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
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
