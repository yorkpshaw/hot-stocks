import * as React from 'react';
import { useState } from 'react';
import { useCreateAccountMutation } from '../store/accountsApi';
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


export function AccountForm(props) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createAccount, result] = useCreateAccountMutation();
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        createAccount({username, email, password});
    }

    if (result.isSuccess) {
        navigate("/portfolio");
    } else if (result.isError) {
        setError(result.error);
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        '& > :not(style)': {
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', },
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
                        <LocalFireDepartmentOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <ErrorNotification error={error} />
                    <Box
                        component="form"
                        sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                    <TextField
                        id="username"
                        label="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        variant="outlined"
                        required />
                    <TextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                    <TextField
                        id="confirmPassword"
                        label="Confirm password"
                        value={password}
                        onChange={e => setConfirmPassword(e.target.value)}
                        variant="outlined"
                        required />
                    <Button variant="contained">Submit</Button>
                </Box>
                </Box>
                </Container>
        </>
      );
}
