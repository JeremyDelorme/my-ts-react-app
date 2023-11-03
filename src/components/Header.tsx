import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" style={{ background: 'linear-gradient(90deg, #ff9566, #ff58c7)' }}>
            <Toolbar>
                <Typography variant="h6" style={{ fontFamily: 'cursive' }}>
                    My 70's App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;