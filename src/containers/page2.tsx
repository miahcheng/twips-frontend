import React from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Clipcard from "../components/clipcard.tsx";

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
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        },
        flexbox: {
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '40px',
            marginBottom: '40px',
        },
        clipcard: {
            marginLeft: '40px',
            marginRight: '40px',
            minWidth: '25%',
        },
    }),
);
const Page2 = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.flexbox} sx={{ display: 'flex', flexDirection: 'row' }}>
                <div className={classes.clipcard}>
                    <Clipcard />
                </div>
                <div className={classes.clipcard}>
                    <Clipcard />
                </div>
                <div className={classes.clipcard}>
                    <Clipcard />
                </div>
            </Box>
            <Box className={classes.flexbox} sx={{ display: 'flex', flexDirection: 'row' }}>
                <div className={classes.clipcard}>
                    <Clipcard />
                </div>
                <div className={classes.clipcard}>
                    <Clipcard />
                </div>
                <div className={classes.clipcard}>
                    <Clipcard />
                </div>
            </Box>
        </div>
    );
};

export default Page2;