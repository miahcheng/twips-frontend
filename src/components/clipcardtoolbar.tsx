import React, { useEffect, useRef } from "react";
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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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
            height: 75,
            width: 75
        }
    })
);
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: colors.white,
                    backgroundColor: colors.secondary
                },
            },
        },
    },
});
const Cliptoolbar = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Grid container rowSpacing={1}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.icon} size='large' variant="contained" >
                            <KeyboardArrowUpOutlinedIcon fontSize="large" />
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button className={classes.icon} size='large' variant="contained" >
                            <KeyboardArrowDownOutlinedIcon fontSize="large" />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider >
    )
};

export default Cliptoolbar;