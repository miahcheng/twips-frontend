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
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Cliptoolbar from "./clipcardtoolbar.tsx";
import Iframe from './iframe.tsx';
import Focustoolbar from './focustoolbar.tsx';
import Chatbox from './chatbox.tsx'
// Card format for the category view page
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
const Focuscard = (input) => {
    const classes = useStyles();
    const { under, category, streamer, title, embed_url } = input
    return (
        <Box >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={9.5}>
                    <CardActionArea href='/focus'>
                        <Card sx={{ height: '100%' }}>
                            <CardHeader sx={{ backgroundColor: colors.primary }} title={title} action={
                                <ThemeProvider theme={theme}>
                                    <Button>
                                        Follow
                                    </Button>
                                </ThemeProvider>
                            } />
                            <CardContent sx={{ backgroundColor: colors.primary }}>
                                <Typography sx={{ color: colors.white }} component="div">
                                    {streamer}
                                </Typography>
                                <div className={classes.video}>
                                    {<iframe
                                        title={"Twitch Clips!"}
                                        src={embed_url + '&parent=localhost' + '&parent=twips-4d764.firebaseapp.com'}
                                        height="635"
                                        width="3200"
                                        allowFullScreen={true}>

                                    </iframe>}
                                </div>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.card} xs={2.5}>
                    <Chatbox />
                </Grid>
                <Grid item className={classes.card} xs={12}>
                    <Focustoolbar />
                </Grid>
            </Grid>
        </Box>
    )
};

export default Focuscard
