import React, { useEffect, useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader, Box, createMuiTheme } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx"
import Iframe from './iframe.tsx';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import Sharebuttonbar from "./sharebuttonbar.tsx";
// card for home page
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginLeft: 500,
        },
        video: {
            display: 'flex',
            justifyContent: 'center',
        },
        icon: {
        },
        icon2: {
            height: 75,
            width: 75,
        },
        box: {
            backgroundColor: colors.lightbackground,
            display: 'flex'
        },
        buttongroup: {
            backgroundColor: colors.lightbackground,
            marginLeft: '60',
        },
        griditem: {
            backgroundColor: colors.lightbackground,
        }
    })
);
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: colors.secondary,
                    backgroundColor: colors.lightbackground,
                },
            },
        },
    },
});
const Cliptoolbar = (input) => {
    const { embed_url } = input;
    const [counter, setCounter] = useState(Math.round(Math.random()*100))
    const [updisabled, setupdisabled] = useState(false)
    const [downdisabled, setdowndisabled] = useState(false)
    const classes = useStyles();
    const handleDown = async (event) => {
        if(updisabled){
            setCounter(counter + 1)
            setupdisabled(false)
        }
        else{
            setCounter(counter - 1)
            setupdisabled(true)
        }
    }
    const handleUp = async (event) => {
        if(downdisabled){
            setCounter(counter - 1)
            setdowndisabled(false)
        }
        else{
            setCounter(counter + 1)
            setdowndisabled(true)
        }
    }

    return (

        <ThemeProvider theme={theme}>
            <Box>
                <Grid container>
                    <ThemeProvider theme={theme}></ThemeProvider>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item className={classes.griditem} xs={0.8} align="center">
                        <Button className={classes.buttongroup} style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={handleUp} disabled={updisabled}>
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        </Button>
                    </Grid>
                    <Grid item
                        className={classes.griditem} xs={0.8} align="center">
                        <Typography color='white'>
                            {counter}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.griditem} xs={0.8} align="center">
                        <Button style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}  onClick={handleDown} disabled={downdisabled}>
                            <KeyboardArrowDownOutlinedIcon fontSize="small" />
                        </Button>
                    </Grid>
                    <Grid item xs={0.8} align="center">
                        <Button
                            variant='outlined'
                            style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
                        >
                            <BookmarkIcon fontSize="small" />
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        {/* <Button // this is where the share button should be - make a share button bar?
                            variant='outlined'
                            style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
                        >
                            <ShareIcon fontSize="small" />
                        </Button> */}
                        <Sharebuttonbar embed_url={embed_url}/>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider >
    )
};

export default Cliptoolbar;