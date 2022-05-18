import React from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Clipcard from "../components/clipcard.tsx";
import Categoryheader from "../components/categoryheader.tsx"
import { Category } from "@mui/icons-material";
import mockData from "../mockData/MockData.tsx";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        HomePage: {
            justifyContent: 'center',
        },
        title: {
            flexGrow: 1,
        },
        drawer: {
            width: 300,
        },
        fullList: {
            width: 'auto',
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        },
        flexbox: {
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '40px',
            marginBottom: '40px',
            scrollSnapType: 'y proximity',
            overflowY: "scroll",
            width:'100vw',
            height: '100vh'
        },
        clipcard: {
            // display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            width:'100vw',
            height: '100vh',
            scrollSnapAlign: 'start',
            marginBottom: "20vh"
        },
        dialogoverlay: {
            display: "none",
            opacity: ".8",
            position: "fixed",
            top: "0px",
            left: "0px",
            background: "#FFF",
            width: "100%",
            zIndex: "10",
        },
        dialogbox :{
            "& div" : {
                background: "#FFF", 
                margin: "8px"
            },
            display: "none",
            position: "fixed",
            background: "#000",
            borderRadius: "7px", 
            width: "550px",
            zIndex: "10"
        },
        dialogboxhead : {
            background: "#666", 
            fontSize: "19px", 
            padding: "10px", 
            color: "#CCC"
        },
        dialogboxbody : {
            background: "#333", 
            padding: "20px", 
            color: "#FFF"
        },
        dialogboxfoot : {
            background: "#666", 
            padding: "10px", 
            textAlign: "right"
        }
    }),
);
const Feed = () => {
    const classes = useStyles();
    const gameurls = [mockData['categories']].map((games, i) => Object.values(games).map((toclip, i) => toclip.clips))
    const streamurls = [mockData['creators']].map((games, i) => Object.values(games).map((toclip, i) => toclip.clips))
    const combinedurls = gameurls[0][0].data.concat(gameurls[0][1].data).concat(gameurls[0][2].data).concat(streamurls[0][0].data).concat(streamurls[0][1].data).concat(streamurls[0][2].data)
    let toFeed = []
    const shuffledurls = combinedurls.sort(() => 0.5 - Math.random())
    toFeed.push(shuffledurls.slice(0, 10))
    function CustomAlert(){
        this.render = function(dialog){
            var winW = window.innerWidth;
            var winH = window.innerHeight;
            var dialogoverlay = document.getElementById('dialogoverlay');
            var dialogbox = document.getElementById('dialogbox');
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH+"px";
            dialogbox.style.left = (winW/2) - (550 * .5)+"px";
            dialogbox.style.top = "100px";
            dialogbox.style.display = "block";
            document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
            document.getElementById('dialogboxbody').innerHTML = dialog;
            document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
        }
        this.ok = function(){
            document.getElementById('dialogbox').style.display = "none";
            document.getElementById('dialogoverlay').style.display = "none";
        }
    }
    var Alert = new CustomAlert();
    setTimeout(function() { Alert.Render("You have been browsing for a while. Take a break?"); }, 10000)
    return (

            {/* <div className={classes.dialogoverlay}></div>
            <div className={classes.dialogbox}>
                <div>
                    <div className={classes.dialogboxhead}></div>
                    <div className={classes.dialogboxbody}></div>
                    <div className={classes.dialogboxfoot}></div>
                </div>
            </div> */}
            <div className={classes.content}>
                {/* <iframe src="https://clips.twitch.tv/embed?clip=EmpathicArbitraryTomatoChocolateRain-EvNbwcYXU9AWHY7v&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe> */}
                <Box className={classes.flexbox} sx={{ display: 'flex', flexDirection: 'column' }}>
                    {toFeed[0].map((tomap, i) =>
                            < div className={classes.clipcard} >
                                <Clipcard thumburl={tomap.thumbnail_url} title={tomap.title} streamer={tomap.broadcaster_name} view_count={tomap.view_count} embed_url={tomap.embed_url} />
                            </div>
                    )
                    }
                </Box >
            </div >
    );
};

export default Feed;