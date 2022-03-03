import React from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Clipcard from "../components/clipcard.tsx";
import Categoryheader from "../components/categoryheader.tsx"
import { Category } from "@mui/icons-material";

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
const Feed= () => {
    const classes = useStyles();
    return (
        <div>
            {/* <iframe src="https://clips.twitch.tv/embed?clip=EmpathicArbitraryTomatoChocolateRain-EvNbwcYXU9AWHY7v&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe> */}
            <Box className={classes.flexbox} sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <Box className={classes.flexbox} sx={{ display: 'flex', flexDirection: 'column' }}>
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

export default Feed;