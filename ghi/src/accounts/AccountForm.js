import * as React from 'react';
import { useState } from 'react';
import { useCreateAccountMutation } from '../store/accountsApi';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';


export function AccountForm(props) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <Alert variant="outlined" severity="error">
                    {error}
            </Alert>
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
                <Button variant="contained">Submit</Button>
            </Box>
        </>
      );
}
