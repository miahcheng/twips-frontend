import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import mockData from "../mockData/MockData.tsx";
import colors from "../style/colors.tsx";
import Streamercard from "../components/streamercard.tsx";
import { responsiveFontSizes } from '@mui/material/styles';
import { Button } from '@mui/material';
import "typeface-roboto";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        HomePage: {
            justifyContent: 'center',
        },
        font: {
            textAlign: 'center',
            justifyContent: 'center',
            alignContent: 'center',
        },
        profileHeader: {
            display: "flex",
            alignItems: 'center',
            flex: "center",
            paddingBottom: "15px",
            marginTop: "55px"
        },
        avatar: {
          objectFit: 'contain',
          height: '100px',
          border: '2px solid #35353a',
          borderRadius: "50%",
          margin: '40px',
          padding: '3px' 
        },
        user: {
            fontFamily: "Roboto"
        },
        name: {
            fontFamily: "Roboto"
        },
        follower: {
            fontFamily: "Roboto"
        },
        navButton: {
            fontColor: "white",
        },
        streamerCardsPage : {
            marginTop: "50px;"
        }
    })
);

const Following = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.streamerCardsPage}>
                <Grid container spacing={15} direction="row">
                    <Grid item xs={4} >
                        <Streamercard
                            image="/tyler1.jpeg"
                            channel="Tyler1"
                            channelName="Tyler1"
                            followers="4.8M Followers"
                        />
                    </Grid>
                    <Grid item xs={4} >
                        <Streamercard
                            image="/league.jpeg"
                            channel="League of Legends"
                            channelName="League of Legends"
                            followers="33M Followers"
                        />
                    </Grid>
                    <Grid item xs={4} >
                        <Streamercard
                            image="/genshin.jpeg"
                            channel="Genshin Impact"
                            channelName="Genshin Impact"
                            followers="3.7M Followers"
                        />
                    </Grid>
                </Grid>
            </Grid>
    )
};

const Test = () => {
    const classes = useStyles();
    const [showFollowing, setFollowing]= React.useState(false);

    return (
        
        <Container
            style={{
                border: "solid",
                minWidth: "100%",
                height: "100vh",
            }}
        >
            <Card className={classes.profileHeader} style= {{backgroundColor: "black"}}>
                <Avatar sx={{ width: 100, height: 100 }} className={classes.avatar} src={"/profile.jpeg"} ></Avatar>
                {/* <CardContent style= {{backgroundColor: colors.secondary}}> */}
                    {/* <ThemeProvider theme={theme}>
                        <Typography variant="h3" className={classes.font}>
                            PROFILE
                        </Typography>
                    </ThemeProvider> */}
                {/* </CardContent> */}
                <CardContent style= {{backgroundColor: "black"}}>
                    <Typography className={classes.user} variant="h5" style={{color: '#7E52A0'}}>{mockData.user.TwitchName}</Typography>
                    <Typography className={classes.name} variant="body1" style={{color: 'white'}}>{mockData.user.FirstName + " " + mockData.user.LastName}</Typography>
                    <Typography className={classes.follower} variant="body1" style={{color: 'white'}}>
                        2 Followers
                    </Typography>
                    <Box sx={{ p: 1 }}></Box>
                    <Typography variant="body1" style={{color: 'white'}}>
                        I indulge in a lot of Twitch
                    </Typography>
                </CardContent>
            </Card>
            <Grid className={classes.navigation} style= {{backgroundColor: "black"}}>
                <Grid item xs={4} container direction="row" spacing={4} sx= {{ml: 0.5}}>
                    <Grid item>
                        <Button className = {classes.navButton} onClick={()=>setFollowing(s=>!s)} variant="text">Following</Button>
                        {showFollowing && <Following></Following>}
                    </Grid>
                </Grid>
            </Grid>
            

        </Container> 
    )
};

export default Test;

        {/* <Card className={classes.card} variant='outlined'>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="100"
                        image='/background.jpeg'
                        alt="Background"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Typography variant="h5">{mockData.user.TwitchName}</Typography>
                                <Typography variant="body2">{mockData.user.FirstName + mockData.user.LastName}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Avatar sx={{ width: 100, height: 100 }} className={classes.avatar} src="/profile.jpeg" ></Avatar>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <CardContent >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={16} sx={{ backgroundColor: colors.secondary }}>
                            <Typography variant="h3"> About you</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography> First Name:</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography> {mockData.user.FirstName} </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography> Last Name:</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography> {mockData.user.LastName} </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                </Card > */}