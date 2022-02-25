import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import mockData from "../mockData/MockData.tsx";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        HomePage: {
            justifyContent: 'center',
        },
        title: {
            flexGrow: 1,
        },
        drawer: {
            width: 300,
        },
        fullList: {
            width: 'auto',
        },
        card: {
            height: '100vh',
            paddingTop: '5vh',
            marginLeft: '10%',
            marginRight: '10%',
            width: '80%',
        },
        head: {
            fontSize: '64px',
            variant: "h2",
        },
        header: {
            fontSize: '32px'
        },
        avatar: {
            display: 'flex', justifyContent: 'center'
        },
    })
);
const Page1 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader title='Profile Page' />
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="350"
                    image='/background.jpeg'
                    alt="Background"
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.54)',
                        color: 'white',
                        padding: '10px',
                    }}
                >
                    <Typography variant="h5">{mockData.user.TwitchName}</Typography>
                    <Typography variant="body2">{mockData.user.FirstName + mockData.user.LastName}</Typography>
                </Box>
            </Box>
            <CardContent>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="h3"> About you</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography> First Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography> {mockData.user.FirstName} </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography> Last Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography> {mockData.user.LastName} </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
};

export default Page1;