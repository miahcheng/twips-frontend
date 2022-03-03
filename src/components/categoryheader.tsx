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
            marginLeft: '80px'
        },
        profilename: {
            marginLeft: 50,
            color: colors.white,
        },
    })
);
const Categoryheader = (input: any) => {
    const classes = useStyles();
    const { name, under } = input;
    console.log(name);
    console.log(under);
    console.log(mockData['categories'])
    console.log(typeof under)
    return (
        <Grid container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 3, ml: 21.5 }}>
            <Grid item xs={1}>
                <div>
                    <Avatar sx={{ width: 150, height: 150 }} className={classes.avatar} src={mockData[under][name].img} ></Avatar>
                </div>
            </Grid>
            <Grid item xs={7} >
                <div className={classes.profilename}>
                    <Typography variant="h4">{mockData[under][name].name}</Typography>
                    <Typography variant="body2">{mockData[under][name].followers}</Typography>
                </div>
            </Grid>
            <Grid item xs={4}>
                <Button sx={{ ml: 25, backgroundColor: colors.secondary, color: colors.white}}>Follow</Button>
            </Grid>
        </Grid >
    )
};

export default Categoryheader