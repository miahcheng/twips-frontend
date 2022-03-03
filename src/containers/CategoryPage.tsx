import React from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Categorycard from "../components/categorycard.tsx";
import Categoryheader from "../components/categoryheader.tsx";
import mockData from "../mockData/MockData";
import { useLocation} from "react-router-dom"   
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
    const { name, under } = location.state
    console.log(name);
    console.log(under);
    return (
        <Container
            style={{
                border: "solid",
                minWidth: "100%",
                height: "100vh",
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <Categoryheader name={name} under={under}></Categoryheader>
                </Grid>
                <Grid item xs={12} sx={{ mt: 4 }} >
                    <Box className={classes.flexbox}>
                        <div className={classes.clipcard}>
                            <Categorycard />
                        </div>
                        <div className={classes.clipcard}>
                            <Categorycard />
                        </div>
                        <div className={classes.clipcard}>
                            <Categorycard />
                        </div>
                        <div className={classes.clipcard}>
                            <Categorycard />
                        </div>
                        <div className={classes.clipcard}>
                            <Categorycard />
                        </div>
                        <div className={classes.clipcard}>
                            <Categorycard />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CategoryPage;