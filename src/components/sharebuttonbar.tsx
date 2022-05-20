import * as React from 'react';
import { FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon, } from 'react-share';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { flexbox } from '@mui/system';
import { Toolbar, Tooltip } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bar: {
            display: "flex",
        },
        button: {
            marginLeft: 5,
            marginRight: 5
        }
    })
);
const Sharebuttonbar = (input) => {
    const { embed_url } = input;
    const classes = useStyles();
    return (
        <div className={classes.bar}>
            <div className={classes.button}>
                <FacebookShareButton
                    url={embed_url}
                >
                    <FacebookIcon size={30} />
                </FacebookShareButton>
            </div>

            <div className={classes.button}>
                <TwitterShareButton
                    url={embed_url}
                >
                    <TwitterIcon size={30} />
                </TwitterShareButton>
            </div>
            <div className={classes.button}>
                <RedditShareButton
                    url={embed_url}
                >
                    <RedditIcon size={30} />
                </RedditShareButton>
            </div>
            <div className={classes.button}>
                <Tooltip title="Share Link" placement="bottom">
                    <Button style={{ maxWidth: '32px', maxHeight: '32px', minWidth: '32px', minHeight: '32px' }} onClick={() => { navigator.clipboard.writeText(embed_url) }}>
                        <LinkIcon />
                    </Button>
                </Tooltip>
            </div>
            <div className={classes.button}>
                <Tooltip title="Embed Link" placement="bottom">
                    <Button style={{ maxWidth: '32px', maxHeight: '32px', minWidth: '32px', minHeight: '32px' }} onClick={() => { navigator.clipboard.writeText(embed_url) }}>
                        <ContentPasteIcon />
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
};

export default Sharebuttonbar