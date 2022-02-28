import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        
    })
);
const CHANGENAME = () => {
    const classes = useStyles();
    return (
        <div>
            Test
        </div>
    )
};

export default CHANGENAME