import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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
    }),
);
const Home = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <Box bgcolor="purple" color="white" display="flex" justifyContent="center" alignItems="center">
                    <Typography>
                        Welcome to Twips
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;