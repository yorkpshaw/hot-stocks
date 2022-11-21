import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function AccountForm(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
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
      );
}
