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

const useStyles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Josefin Slab, sans-serif', // Set the font for menu items
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
        fontFamily: 'Josefin Slab, sans-serif', // Set the font for menu items
    },
    menuItem: {
        textDecoration: 'none',
        color: 'inherit',
        padding: '8px 16px',
        fontFamily: 'Josefin Slab, sans-serif', // Set the font for menu items
    },
};

const drawerWidth = 240;

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
    background: '#969696',
    boxShadow: 'none',
    height: '80px',

}));

const Header: React.FC = () => {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
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
                                    <Button color={value === '/' ? 'secondary' : 'inherit'}>Maison</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" style={useStyles.menuItem}>
                                    <Button color={value === '/about' ? 'secondary' : 'inherit'}>À propos</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" style={useStyles.menuItem}>
                                    <Button color={value === '/shop' ? 'secondary' : 'inherit'}>Magasin</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" style={useStyles.menuItem}>
                                    <Button color={value === '/contact' ? 'secondary' : 'inherit'}>Contact</Button>
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
