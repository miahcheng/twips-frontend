import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { flexbox } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        streamerCard: {
            marginBottom: "40",
            width: "270",
            display: "flex",
            fontColor: "white"
        },
        streamerCard_thumbnail: {
            height: "140",
            width: "250",
        }
    })
);
const Streamercard = ({image, channel, channelName, followers}) => {
    const classes = useStyles(
    );
    return (
        <div className="streamerCard">
            <img className="streamerCard_thumbnail" src={image} alt={channel} />
            <h4 style={{color: 'white'}}>{channelName}</h4>
            <h4 style={{color: 'white'}}>{followers}</h4>
        </div>
    )
};

export default Streamercard