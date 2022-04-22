import { Card, Paper, Container, Box, Grid, Typography, CardMedia, CardContent, CardHeader, Avatar } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import mockData from "../mockData/MockData.tsx";
import colors from "../style/colors.tsx"
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        HomePage: {
            justifyContent: 'center',
        },
    })
);
const Test = () => {
    const classes = useStyles();
    return (
        <Box>
            Test
        </Box>
    )
};

export default Test;