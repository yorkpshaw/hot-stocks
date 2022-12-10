import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { CssBaseline } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ProgressBar } from './ProgressBar';

const theme = createTheme();

export function LargeLoading() {

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
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
                        <LocalFireDepartmentOutlinedIcon />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                        Heating up...
                    </Typography>
                    <ProgressBar />
                </Box>
            </Container>
        </ThemeProvider>
    );
}


export function SmallLoading() {

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
                    }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Initiating molecular vibration...
                    </Typography>
                    <ProgressBar />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
