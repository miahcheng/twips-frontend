

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NewUserHandler } from '../handlers/userHandlers.tsx';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@mui/icons-material';
const theme = createTheme();

export default function NewUser() {
  const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            passwordconf: data.get('passwordconf'),
            firstname : data.get('firstname'),
            lastname : data.get('lastname'),
        });
        NewUserHandler(data.get('email'), data.get('password'), data.get('passwordconf'), data.get('firstname'), data.get('lastname'))
    };
    const base = "https://api.twipsbits.me";
    const user = "/user/";
    const myuser = "/user/id";
    const sessions = "/sessions";
    const mySession = "/sessions/mine";
    console.log("newUser")
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome to Twips
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordconf"
                            label="PasswordConf"
                            type="passwordConf"
                            id="passwordConf"
                            autoComplete="current-passwordconf"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="firstname"
                            label="First Name"
                            type="First Name"
                            id="First Name"
                            autoComplete="FirstName"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="Last Name"
                            type="Last Name"
                            id="Last Name"
                            autoComplete="LastName"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create New Account
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => {
                               navigate('/');
                            }}
                        >
                            Back to Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
