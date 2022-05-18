import React from "react";
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "../style/colors.tsx"
import Stack from '@mui/material/Stack';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// card for home page
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            height: 75,
            width: 75
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
const Changeclipbutton = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Stack direction="row" alignItems="center" spacing={1}>

            </Stack>
        </ThemeProvider>
    )
};

export default Changeclipbutton;