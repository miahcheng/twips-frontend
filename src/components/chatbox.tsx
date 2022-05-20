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
import { CardActionArea } from '@mui/material';
import Updownbuttons from "./updownbuttons.tsx";
import Comments from './comments.tsx';

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
        },
        commentBox: {
            color: 'white'
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

const Chatbox = (input) => {
    const { thumburl, title, under, category, streamer, view_count, embed_url } = input;
    const classes = useStyles();
    return (
        <Box className={classes.commentBox}>
           {/* <img width={350} height={765} src={'/chat.png'} alt="comments" /> */}
           {/* pass in user id V down below */}
           <Comments currentUserId="1" /> 
        </Box>
    )
};

export default Chatbox