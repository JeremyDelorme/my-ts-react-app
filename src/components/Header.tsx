import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Divider,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

const drawerWidth = 240;

const useStyles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Josefin Slab, sans-serif',
    },
    title: {
        fontFamily: 'Josefin Slab, sans-serif',
        fontSize: '2rem',
        flex: 1,
    },
    menu: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontFamily: 'Josefin Slab, sans-serif',
    },
    menuItem: {
        textDecoration: 'none',
        padding: '8px 16px',
        fontFamily: 'Josefin Slab, sans-serif',
        color: '#000' // Unclicked menu item color set to black
    },
    selectedMenuItem: {
        textDecoration: 'none',
        padding: '8px 16px',
        fontFamily: 'Josefin Slab, sans-serif',
        color: 'beige', // Clicked menu item color set to beige
    },
};

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
    background: '#969696',
    boxShadow: 'none',
    height: '80px',
    width: '1200',
}));

const Header: React.FC = () => {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuItemClick = (path: string) => {
        setValue(path);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <HeaderAppBar position="static">
                <Toolbar style={useStyles.header}>
                    <Typography variant="h6" sx={useStyles.title}>
                        Mon Portfolio
                    </Typography>
                    <Hidden only="xs" implementation="css">
                        <ul style={useStyles.menu}>
                            <li>
                                <Link to="/" style={useStyles.menuItem}>
                                    <Button
                                        style={value === '/' ? useStyles.selectedMenuItem : useStyles.menuItem}
                                        onClick={() => handleMenuItemClick('/')}
                                    >
                                        Maison
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" style={useStyles.menuItem}>
                                    <Button
                                        style={value === '/about' ? useStyles.selectedMenuItem : useStyles.menuItem}
                                        onClick={() => handleMenuItemClick('/about')}
                                    >
                                        À propos
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" style={useStyles.menuItem}>
                                    <Button
                                        style={value === '/shop' ? useStyles.selectedMenuItem : useStyles.menuItem}
                                        onClick={() => handleMenuItemClick('/shop')}
                                    >
                                        Magasin
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" style={useStyles.menuItem}>
                                    <Button
                                        style={value === '/contact' ? useStyles.selectedMenuItem : useStyles.menuItem}
                                        onClick={() => handleMenuItemClick('/contact')}
                                    >
                                        Contact
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </Hidden>
                </Toolbar>
            </HeaderAppBar>
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    sx={{ width: drawerWidth }}
                >
                    <List>
                        <ListItem button onClick={handleDrawerToggle} component={Link} to="/">
                            <ListItemText primary="Maison" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleDrawerToggle} component={Link} to="/about">
                            <ListItemText primary="À propos" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleDrawerToggle} component={Link} to="/shop">
                            <ListItemText primary="Magasin" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleDrawerToggle} component={Link} to="/contact">
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
            </Hidden>
        </>
    );
};

export default Header;