import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import colors from '../style/colors.tsx';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Icon } from '@iconify/react';
import TagIcon from '@mui/icons-material/Tag';
import { Avatar } from '@mui/material';
import mockData from '../mockData/MockData.tsx';
import { SearchCategories } from '../handlers/userHandlers'
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
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
        appBar: {
            backgroundColor: colors.secondary,
            marginBottom: "55px"
        },
        drawerHeader: {
            color: colors.primary,
            fontSize: '24px',
        },
        drawerLink: {
            color: colors.white,
            fontSize: '24px'
        },
        avatar: {
            marginTop: "2px"
        }
    }),
);
const drawerFont = createTheme({
    typography: {
        fontSize: 24,
    },
});

const text = {
    fontSize: "1vw"
};
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const newmockData = { ...mockData };
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const CategoryLink = (catname, undername) => {
    return (
        <NavLink
            to={'/CategoryPage'}
            state={{
                name: catname,
                under: undername,
            }}
            style={{ textDecoration: 'none' }}>
            <MenuItem style={{ color: colors.white }}>
                <ListItemIcon style={{ color: colors.white }}>
                    <Avatar src={mockData[undername][catname].img} sx={{ width: 32, height: 32 }} /> 
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ style: text }} primary={mockData[undername][catname].name} style={{ color: colors.white }} sx={{ ml: 1 }} /> 
            </MenuItem>
        </NavLink>
    )
}

const Header = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };
     const keyPress = (e) =>{
         console.log('ok')
        if(e.keyCode == 13){
           navigate("/SearchPage", {state:{
            tosearch: e.target.value
        }});
        }
     }
    return (
        <div>
            <AppBar color='primary' position="fixed">
                <Toolbar>
                    <IconButton edge="start" color='inherit' aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Twips
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={keyPress} 
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
                        <NavLink to={'/test'} style={{ textDecoration: 'none' }}>
                            <Avatar sx={{ width: 40, height: 40 }} className={classes.avatar} src={"/profile.jpeg"} ></Avatar>
                        </NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.drawer }} PaperProps={{
                sx: {
                    backgroundColor: colors.background,
                    width: '15%',
                }
            }} open={isOpen} onClose={toggleDrawer(false)}>
                <div
                    className={classes.fullList}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <ThemeProvider theme={drawerFont}>
                        <MenuList>
                            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                                <MenuItem style={{ color: colors.primary }}>
                                    <ListItemText primaryTypographyProps={{ style: text }} primary={'Twips'} />
                                </MenuItem>
                            </NavLink>
                            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                                <MenuItem style={{ color: colors.white }}>
                                    <ListItemIcon style={{ color: colors.white }}>
                                        <Icon icon="fluent:target-arrow-16-filled" />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ style: text }} primary={'Your Feed'} />
                                </MenuItem>
                            </NavLink>
                            <MenuItem style={{ color: colors.primary }}>
                                <ListItemText primaryTypographyProps={{ style: text }} primary={'Categories you follow'} />
                            </MenuItem>
                            {[mockData.categories].map((names, i) =>
                                Object.keys(names).map((ogname, i) =>
                                    CategoryLink(ogname, 'categories')
                                )
                            )}
                            <MenuItem style={{ color: colors.primary }}>
                                <ListItemText primaryTypographyProps={{ style: text }} primary={'Creators you follow'} />
                            </MenuItem>
                            {[mockData.creators].map((names, i) =>
                                Object.keys(names).map((ogname, i) =>
                                    CategoryLink(ogname, 'creators')
                                )
                            )}
                        </MenuList>
                    </ThemeProvider>
                </div>
            </Drawer>
        </div>
    )
}
export default Header;