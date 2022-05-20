import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar, TextField } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import mockData from "../mockData/MockData.tsx";
import colors from "../style/colors.tsx";
import Streamercard from "../components/streamercard.tsx";
import { responsiveFontSizes } from '@mui/material/styles';
import { Button } from '@mui/material';
import "typeface-roboto";
import { GetUserHandler, GetUserInfoHandler, ChangeUserInfoHandler } from "../handlers/userHandlers.tsx";

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
        streamerCardsPage: {
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
    const [user, setUser] = useState();
    const [profiledesc, setprofiledesc] = useState();
    useEffect(() => {
        async function fetchMyAPI() {
            console.log(sessionStorage.getItem("User"))
            await setUser(JSON.parse(sessionStorage.getItem("User")))
            await GetUserInfoHandler(setprofiledesc, JSON.parse(sessionStorage.getItem("User")).username)
        }
        fetchMyAPI()
    }, []);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(user?.username)
        console.log(data.get('descrip'))
        await ChangeUserInfoHandler(data.get('descrip'), user?.username)
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value == " ") {
            setprofiledesc("Create your first profile description")
        }
        else{
            setprofiledesc(event.target.value);
        }
    };

    const [showFollowing, setFollowing] = React.useState(false);

    
    return (

        <Container
            style={{
                border: "solid",
                minWidth: "100%",
                height: "100vh",
            }}
        >
            <Card className={classes.profileHeader} style={{ backgroundColor: "black" }}>
                <Avatar sx={{ width: 100, height: 100 }} className={classes.avatar} src={"/profile.jpeg"} ></Avatar>
                {/* <CardContent style= {{backgroundColor: colors.secondary}}> */}
                {/* <ThemeProvider theme={theme}>
                        <Typography variant="h3" className={classes.font}>
                            PROFILE
                        </Typography>
                    </ThemeProvider> */}
                {/* </CardContent> */}
                <CardContent style={{ backgroundColor: "black" }}>
                    <Typography className={classes.user} variant="h5" style={{ color: '#7E52A0' }}>  {user?.username}</Typography>
                    <Typography className={classes.follower} variant="body1" style={{ color: 'white' }}>
                    </Typography>
                    <Box sx={{ p: 1 }}></Box>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                id="outlined-multiline"
                                name="descrip"
                                placeholder="Bio"
                                variant="filled"
                                size="small"
                                multiline
                                value={profiledesc}
                                inputProps={{ style: { color: "white" }} }
                                style={{ backgroundColor: 'black' }}
                                onChange={handleChange}
                            />
                            <Box sx={{ p: 0.1 }}></Box>
                            <Button
                                type="submit"
                                variant="text"
                                sx={{ mt: 2, mb: 1 }}
                            >
                                Edit Bio
                            </Button>
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
            <Grid className={classes.navigation} style={{ backgroundColor: "black" }}>
                <Grid item xs={4} container direction="row" spacing={4} sx={{ ml: 0.5 }}>
                    <Grid item>
                        <Button className={classes.navButton} onClick={() => setFollowing(s => !s)} variant="text">Following</Button>
                        {showFollowing && <Following></Following>}
                    </Grid>
                </Grid>
            </Grid>


        </Container>
    )
};

export default Test;
