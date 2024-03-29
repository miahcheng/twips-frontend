
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./containers/Feed.tsx";
import Header from "./components/header.tsx";
import Page1 from "./containers/page1.tsx";
import Test from "./containers/test.tsx";
import CategoryPage from "./containers/CategoryPage.tsx";
import Login from "./containers/login.tsx";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import colors from "./style/colors.tsx"
import FocusView from "./containers/FocusView.tsx";
import NewUser from "./containers/NewUser.tsx";
import { Container } from "@mui/material";
import useToken from './handlers/useToken.tsx';
import SearchPage from "./containers/SearchPage.tsx";
const useStyles = makeStyles((theme) =>
  createStyles({
    body: {
      backgroundColor: colors.background,
      border: "solid",
      minWidth: "100%",
      height: "100%",
    }
  }),
);
const rootTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    white: {
      main: colors.white,
    }
  },
});
export default function App() {
  const classes = useStyles();
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login setToken={setToken}/>} />
          <Route exact path="/NewUser" element={<NewUser />} />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <ThemeProvider theme={rootTheme}>

      <div className={classes.body}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/page1" element={<Page1 />} />
            <Route exact path="/CategoryPage" element={<CategoryPage />} />
            <Route exact path="/FocusView" element={<FocusView />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/SearchPage" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}