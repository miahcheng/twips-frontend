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

const Clipcard = () => {
    const classes = useStyles();
    const headerTitle = (
        <div>
            <Typography color="common.white" gutterBottom variant="h5" component="div">
                Clip Name
            </Typography>
            <Typography variant="body2" color="common.white">
                Clip description goes here. There may be additional information regarding the clip
                creator and what stream the clip originates from.
            </Typography>
        </div>)
    return (
        <Box style={{ marginTop: 50 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item className={classes.card} xs={3}>
                </Grid>
                <Grid item className={classes.card} xs={6}>
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
                                {Iframe('https://clips.twitch.tv/embed?clip=EmpathicArbitraryTomatoChocolateRain-EvNbwcYXU9AWHY7v&parent=localhost')}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item className={classes.card} xs={3}>
                </Grid>
                <Grid item className={classes.card} xs={12}>
                    <Cliptoolbar />
                </Grid>
            </Grid>
        </Box>
    )
};

export default Clipcard