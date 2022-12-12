import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { CircularProgress, CssBaseline } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const theme = createTheme();


function ProgressBar() {
    return (
        <Box sx={{ marginTop: 1, width: '100%', color: deepOrange[500] }}>
            <LinearProgress color='inherit' />
        </Box>
    );
}

function ProgressCircle() {
    return (
        <Box sx={{ marginTop: 1, width: '100%', color: deepOrange[500] }}>
            <CircularProgress color='inherit' />
        </Box>
    );
}


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
                    <ProgressCircle />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
