import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button, Typography, Grid, Box, Paper } from '@mui/material';
import colors from '../style/colors.tsx'
import mockData from '../mockData/MockData.tsx';
import { isNamedTupleMember } from 'typescript';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            marginLeft: '80px' // should not hard code
        },
        profilename: {
            marginLeft: 50,
            color: colors.white,
        },
    })
);
const Categoryheader = (input: any) => {
    const classes = useStyles();
    const { gamename, src } = input;
    return (
        <Grid container
            direction="row"
            alignItems="left"
            justifyContent="left"
            sx={{ mt: 8, mb: 5}}>
            <Grid item xs={1} >
                <div>
                    <Avatar sx={{ ml:8, width: 110, height: 110 }} className={classes.avatar} src={src} ></Avatar>
                </div>
            </Grid>
            <Grid item xs={5}>
                <div className={classes.profilename}>
                    <Typography variant="h4">{gamename}</Typography>
                    <Button sx={{mt:1, backgroundColor: colors.secondary, color: colors.white}}>Follow</Button>
                </div>
            </Grid>
        </Grid >
    )
};

export default Categoryheader