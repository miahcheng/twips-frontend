import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button, Typography, Grid, Box } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            marginLeft: '80px'
        },
        profile: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
        },
        profilename: {
            marginLeft: '25px',
        }
    })
);
const Categoryheader = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={5}>
                <div className={classes.profile}>
                    <Avatar sx={{ width: 100, height: 100 }} className={classes.avatar} src="/profile.jpeg" ></Avatar>
                    <div className={classes.profilename}>
                        <Typography variant="h4">Test</Typography>
                        <Typography variant="body2">Test</Typography>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={1} className={classes.profile}>
                <Button variant="outlined">Outlined</Button>
            </Grid>
        </Grid>
    )
};

export default Categoryheader