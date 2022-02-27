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
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import colors from '../style/colors.tsx';
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
        }
    }),
);
const Header = () => {
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
    return (
        <div>
            <AppBar color='primary' position="static">
                <Toolbar>
                    <IconButton edge="start" color='inherit' aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Twips
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
                <div
                    className={classes.fullList}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <MenuList>
                        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                            <MenuItem>
                                <ListItemText primary={'Home'} />
                            </MenuItem>
                        </NavLink>
                        <NavLink to={'/page1'} style={{ textDecoration: 'none' }}>
                            <MenuItem>
                                <ListItemText primary={'Page1'} />
                            </MenuItem>
                        </NavLink>
                        <NavLink to={'/page2'} style={{ textDecoration: 'none' }}>
                            <MenuItem>
                                <ListItemText primary={'Page2'} />
                            </MenuItem>
                        </NavLink>
                    </MenuList>
                </div>
            </Drawer>
        </div>
    )
}
export default Header;