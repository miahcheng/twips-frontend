import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx"
import ButtonBase from '@mui/material/ButtonBase';
import mockData from '../mockData/MockData.tsx';
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@mui/icons-material';
import Chatbox from './chatbox.tsx';
// Card format for the category view page
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: 25,
            marginBottom: 25,
            width: 400, // should not hard code this
            height: 400, // should not hard code this
        },
        cardAction: {
            display: 'block',
            textAlign: 'initial'
        },
        footer: {
            bottom: 0
        }
    })
);
const condSub = (under, category, streamer) => {

    if (under === 'creators') {
        return (
            <Typography sx={{ color: colors.white }} component="div">
                {category}
            </Typography>
        )
    }
    else {
        return (
            <Typography sx={{ color: colors.white }} component="div">
                {streamer}
            </Typography>
        )
    }
}

const handleClick = (under, category, streamer, title, embed_url) => {
    navigate.navigate('/FocusView', { under: under, category: category, streamer: streamer, title: title, embed_url: embed_url })
}

const Categorycard = (input) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const { thumburl, title, category, streamer, view_count, embed_url } = input;
    console.log(view_count)
    return (
        <Box>
            <ButtonBase
                className={classes.cardAction}
                onClick={
                    () => navigate('/FocusView', { state: { category: category, streamer: streamer, title: title, embed_url: embed_url } })
                }>
                <Card sx={{ backgroundColor: colors.primary }} className={classes.card} >
                    <CardContent sx={{ height: 80 }} title='Twitch Streamer Name' >
                        <Typography sx={{ color: colors.white }} variant="h5" component="div">
                            {title} 
                        </Typography>
                        <div>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            height={40}
                            columnSpacing={{ md: 3.5 }}
                        >
                            <Grid item xs={0.5}>
                                <VisibilityIcon sx={{ color: colors.white }} ></VisibilityIcon>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ color: colors.white }} component="div">
                                   {view_count}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="300" // should not hard code this
                        src={thumburl}
                        alt="thumbnail˝"
                    />
                </Card>
            </ButtonBase>
        </Box>
    )
};

export default Categorycard