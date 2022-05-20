import React, { useEffect, useState } from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar, Button, MenuItem, ListItemText, ListItemIcon, MenuList } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Categorycard from "../components/categorycard.tsx";
import Categoryheader from "../components/categoryheader.tsx";
import mockData from "../mockData/MockData.tsx";
import { useLocation } from "react-router-dom"
import { SearchCategories, GetClips } from "../handlers/userHandlers.tsx"
import { NavLink } from 'react-router-dom';
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
        },
        avatar: {
            marginLeft: '80px' // should not hard code
        },
        profilename: {
            marginLeft: 50,
            color: colors.white,
        },
    }),
);
const SearchPage = (props) => {
    const classes = useStyles();
    const location = useLocation()
    const { tosearch } = location.state
    const searched = SearchCategories(tosearch)
    let catlength
    const [data, setData] = useState()
    if (searched) {
        if (searched.length > 5) {
            catlength = 5
        }
        else {
            catlength = searched.length
        }
    }
    useEffect(() => {
        async function fetchMyAPI() {
            if (searched) {
                await GetClips(searched[0].id, setData)
            }
        }

        fetchMyAPI()
    }, [tosearch]);
    return (
        <Container className={classes.container}
            style={{
                border: "solid",
                minWidth: "100%",
                height: "100%",
            }}
        >
            <Grid className={classes.grid} container>
                <Grid item xs={12} container direction="row">
                    <Box className={classes.flexbox}>
                        {searched && searched?.slice(0, catlength).map((element, i) =>
                            <MenuList>
                                <NavLink
                                    to={'/CategoryPage'}
                                    state={{
                                        id: element.id, 
                                        src: element.box_art_url,
                                        gamename: element.name

                                    }}
                                    style={{ textDecoration: 'none' }}>
                                    <MenuItem style={{ color: colors.white }}>
                                        <ListItemIcon>
                                            <Avatar sx={{ ml: 8, width: 110, height: 110 }} className={classes.avatar} src={element.box_art_url} ></Avatar>
                                        </ListItemIcon>
                                        <ListItemText className={classes.profilename}>
                                            <Typography variant="h4">{element.name}</Typography>
                                            <Button sx={{ mt: 1, backgroundColor: colors.secondary, color: colors.white }}>Follow</Button>
                                        </ListItemText>
                                    </MenuItem>
                                </NavLink>
                            </MenuList>
                        )}
                        {searched ? data?.data.map((element, i) =>
                            <div className={classes.clipcard}>
                                <Categorycard thumburl={element.thumbnail_url} title={element.title} category={element.game_id} streamer={element.broadcaster_name} view_count={element.view_count} embed_url={element.embed_url} />
                            </div>
                        ) : <Typography variant="h4"> No Results try searching again </Typography>}
                    </Box>
                </Grid>
            </Grid >
        </Container >
    );
};

export default SearchPage;