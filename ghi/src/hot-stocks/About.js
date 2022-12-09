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
        'Explore': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
        'Search': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
        'Saved': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
        'Portfolio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
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
