import React from "react";
import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx";
import Clipcard from "../components/clipcard.tsx";
import Categoryheader from "../components/categoryheader.tsx"
import { Category } from "@mui/icons-material";
import mockData from "../mockData/MockData.tsx";

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
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        },
        flexbox: {
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '40px',
            marginBottom: '40px',
        },
        clipcard: {
            marginLeft: '40px',
            marginRight: '40px',
            minWidth: '25%',
        },
    }),
);
const Feed = () => {
    const classes = useStyles();
    const gameurls = [mockData['categories']].map((games, i) => Object.values(games).map((toclip, i) => toclip.clips))
    const streamurls = [mockData['creators']].map((games, i) => Object.values(games).map((toclip, i) => toclip.clips))
    const combinedurls = gameurls[0][0].data.concat(gameurls[0][1].data).concat(gameurls[0][2].data).concat(streamurls[0][0].data).concat(streamurls[0][1].data).concat(streamurls[0][2].data)
    let toFeed = []
    const shuffledurls = combinedurls.sort(() => 0.5 - Math.random())
    toFeed.push(shuffledurls.slice(0, 100))
    return (
        <div>
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