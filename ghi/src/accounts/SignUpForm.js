import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { CssBaseline } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Copyright } from '../common/Copyright';
import { ErrorNotification } from '../common/ErrorNotification';
import { preventDefault } from '../common/utils';
import { updateField } from '../rtk-files/accountSlice';
import { useSignUpMutation } from '../rtk-files/authApi';
import { toggleSignUp } from '../rtk-files/signUpSlice';


const theme = createTheme();

export function SignUpForm(props) {

  const dispatch = useDispatch();
  const { username, email, password } = useSelector(state => state.account);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUp, { error, isLoading: signUpLoading }] = useSignUpMutation();
  const field = useCallback(
    e => dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch],
  );

  return (
    <>
      {signUpLoading ?
        <CircularProgress /> :
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
                <LocalFireDepartmentOutlinedIcon />
              </Avatar>
              <ErrorNotification error={error} />
              <Box
                component="form"
                method="post"
                onSubmit={preventDefault(signUp, () => ({ username, email, password }))}
                noValidate sx={{ mt: 1 }}>
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
                  name="email"
                  label="Email"
                  value={email}
                  onChange={field}
                  variant="outlined" />
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
                  variant="outlined" />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  type="password"
                  variant="outlined" />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: deepOrange[500] }}>
                  Sign up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link onClick={() => dispatch(toggleSignUp())} variant="body2">
                      {"Already have an account? Log in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      }
    </>
  );
}
