import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer style={{ background: '#969696', padding: '16px' }}>
            <Typography variant="body2" color="textSecondary" align="center" style={{ fontFamily: 'Josefin Slab, sans-serif' }}>
                &copy; {new Date().getFullYear()} My 70's App
            </Typography>
        </footer>
    );
};

export default Footer;
