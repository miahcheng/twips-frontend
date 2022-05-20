import React from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Header from "../components/header.tsx";
import FocusCard from "../components/focuscard.tsx";
import mockData from "../mockData/MockData";
import { useLocation} from "react-router-dom"  

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        HomePage: {
            justifyContent: 'center',
        },

        container: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        },
        flexbox: {
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex', // display flex and flexwrap so it changes the number of boxes with resolution
            flexWrap: 'wrap',
        },
        clipcard: {
            minWidth: '25%'
        },

    }),
);
const FocusView = (props) => {
    const classes = useStyles();
    const location = useLocation()
    const { category, streamer, title, embed_url } = location.state
    return (
        <Container
            style={{
                border: "solid",
                minWidth: "100%",
                height: "100%",
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.flexbox}>
                        <div className={classes.clipcard}>
                            <FocusCard category={category} streamer={streamer} title={ title} embed_url={embed_url}/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FocusView;