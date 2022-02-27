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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            borderColorProp: colors.secondary,
            borderRadius: 10,
        }
    })
);
const Clipcard = () => {
    const classes = useStyles();
    return (
        <Box sx={{borderColor: colors.secondary, border: 1}}>
            <Card className={classes.card}>
            <CardHeader sx={{ backgroundColor: colors.secondary }} title='Profile Page' />
            <CardMedia
                component="img"
                height="200"
                image='/background.jpeg'
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Box>
    )
};

export default Clipcard