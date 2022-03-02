import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader, Box} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx"
import iframe from './iframe.tsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: 50,
        }
    })
);
const Clipcard = () => {
    const classes = useStyles();
    return (
        <Box sx={{borderColor: colors.secondary, border: 1}}>
            <Card className={classes.card}>
            <CardHeader sx={{ backgroundColor: colors.secondary }} title='Twitch Streamer Name' />
            <CardMedia
                component = {iframe}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Clip Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Clip description goes here. There may be additional information regarding the clip
                    creator and what stream the clip originates from.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
        </Box>
    )
};

export default Clipcard