import React, { useEffect } from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Categorycard from "../components/categorycard.tsx";
import Categoryheader from "../components/categoryheader.tsx";
import mockData from "../mockData/MockData.tsx";
import { useLocation } from "react-router-dom"
import { GetClips } from "../handlers/userHandlers.tsx";
import { useState } from "react";
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
            width: '75vw',
            height: '75vh'

        },
        grid: {
            marginTop: "55px"
        },
        flexbox: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex', // display flex and flexwrap so it changes the number of boxes with resolution
            flexWrap: 'wrap',

        },
        clipcard: {
            marginLeft: '40px',
            marginRight: '40px',
            minWidth: '25%',

        },
        root: {
            flexGrow: 1,
        }
    }),
);
const CategoryPage = (props) => {
    const classes = useStyles();
    const location = useLocation()
    const { id, gamename, src } = location.state
    const [data, setData] = useState()
    useEffect(() => {
        async function fetchMyAPI() {
                await GetClips(id, setData)
        }
        fetchMyAPI()
    }, []);
    return (
        <Container className={classes.container}
            style={{
                border: "solid",
                minWidth: "100%",
                height: "100%",
            }}
        >
            <Grid className={classes.grid} container>
                <Grid item xs={12}>
                    <Categoryheader gamename={gamename} src={src}></Categoryheader>
                </Grid>
                <Grid item xs={12} container direction="row">
                    <Box className={classes.flexbox}>
                        {data?.data.map((element, i) =>
                            <div className={classes.clipcard}>
                                <Categorycard thumburl={element.thumbnail_url} title={element.title} under={'category'} category={element.game_id} streamer={element.broadcaster_name} view_count={element.view_count} embed_url={element.embed_url} />
                            </div>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CategoryPage;