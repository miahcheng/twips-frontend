
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home.tsx";
import Header from "./components/header.tsx";
import Page1 from "./containers/page1.tsx"
import Login from "./containers/login.tsx";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
const useStyles = makeStyles((theme) =>
    createStyles({
        body: {
          backgroundColor: 'gray'
        }
    }),
);
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}