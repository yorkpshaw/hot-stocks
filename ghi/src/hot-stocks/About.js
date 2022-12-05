import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { deepOrange } from '@mui/material/colors';
import { Container } from '@mui/material';
import { textAlign } from '@mui/system';
import { Copyright } from '../common/Copyright';

export function About(props) {
  return (
    <Container component="main" maxWidth="sm">
    <Box
      sx={{
        marginTop: 8,
        border: 3,
        borderColor: "black",
        height: 400,
        width: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: 'auto',
        fontSize: 24,
      }}
    >
    <Avatar sx={{ m: 10, bgcolor: deepOrange[500] }}>
      <LocalFireDepartmentOutlinedIcon />
    </Avatar>
    </Box>
    <Box
      sx={{
        marginTop: 8,
        mx: 'auto',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Hot Stocks!!!!!!!!!!
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

// Logo in a box at center of page
// Description right below
// Ask group what logo and description will look like
// LoginForm - import { deepOrange } from '@mui/material/colors';
// import Typography from '@mui/material/Typography';
