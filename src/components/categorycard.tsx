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

// Card format for the category view page
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: 25,
            marginBottom: 50,
            width: 475, // should not hard code this
            height: 400, // should not hard code this
        },
        cardAction: {
            display: 'block',
            textAlign: 'initial'
        }
    })
);
const condSub = ( under, category, streamer) => {
    console.log(under)
    if (under === 'creators') {
        return (
            <Typography component="div">
                {category}
            </Typography>
        )
    }
    else {
        return (
            <Typography component="div">
                {streamer}
            </Typography>
        )
    }
}
const Categorycard = (input) => {
    const classes = useStyles();
    const { thumburl, title, under, category, streamer } = input;
    return (
        <Box>
            <ButtonBase
                className={classes.cardAction}>
                <Card sx={{ backgroundColor: colors.primary }} className={classes.card} >
                    <CardContent title='Twitch Streamer Name' >
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        {condSub(under, category, streamer)}
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="270" // should not hard code this
                        src={thumburl}
                        alt="thumbnail˝"
                    />
                </Card>
            </ButtonBase>
        </Box>
    )
};

export default Categorycard