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
import Cliptoolbar from "./clipcardtoolbar.tsx";
import { CardActionArea, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@mui/icons-material';

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
        },
        cardAction: {
            display: 'block',
            textAlign: 'initial'
        },
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

const handleClick = (under, category, streamer, title, embed_url) => {
    navigate.navigate('/FocusView', { under: under, category: category, streamer: streamer, title: title, embed_url: embed_url })
}


const Clipcard = (input) => {
    const navigate = useNavigate();
    const { thumburl, title, under, category, streamer, view_count, embed_url } = input;
    const classes = useStyles();
    const headerTitle = (
        <div>
            <Typography color="common.white" gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="common.white">
                {category}
                {streamer}
            </Typography>
        </div>)
    return (
        <Box style={{ marginTop: 95 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item className={classes.card} xs={3}>
                </Grid>
                <Grid item className={classes.card} xs={6}>
                        <ButtonBase
                            className={classes.cardAction}
                            onClick={
                                () => navigate('/FocusView', { state: { under: under, category: category, streamer: streamer, title: title, embed_url: embed_url } })
                            }>
                            <Card>
                                <CardHeader sx={{ backgroundColor: colors.primary }} title={headerTitle} action={
                                    <ThemeProvider theme={theme}>
                                        <Button>
                                            Follow
                                        </Button>
                                    </ThemeProvider>
                                } />
                                <CardContent sx={{ backgroundColor: colors.primary }}>
                                    <div className={classes.video}>
                                        {Iframe(embed_url + '&parent=localhost' + '&parent=twipsbits.me')}
                                    </div>
                                </CardContent>
                            </Card>
                    </ButtonBase>
                </Grid>
                <Grid item className={classes.card} xs={3}>
                </Grid>
                <Grid item className={classes.card} xs={0.75}>
                </Grid>
                <Grid item className={classes.card} xs={9}>
                    <Cliptoolbar embed_url={embed_url}/>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Clipcard