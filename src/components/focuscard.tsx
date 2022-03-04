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

// Card format for the category view page
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: 25,
            marginBottom: 50,
            width: 1000, // should not hard code this
            height: 1000, // should not hard code this
        }
    })
);
const Focuscard = () => {
    const classes = useStyles();
    return (
        <Box>
            <Card className={classes.card} >
                {/* <CardHeader sx={{ backgroundColor: colors.secondary }} title='Twitch Streamer Name' /> */}
                <CardContent title='Twitch Streamer Name' >
                    <Typography variant="h5" component="div">
                        Streamer Name
                    </Typography>
                    <Typography component="div">
                        Clip Title
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="270" // should not hard code this
                    image='/background.jpeg'
                    alt="green iguana"
                />
            </Card>
        </Box>
    )
};

export default Focuscard