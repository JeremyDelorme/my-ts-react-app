// Footer.tsx
import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer style={{ background: '#ff9566', padding: '16px' }}>
            <Typography variant="body2" color="textSecondary" align="center" style={{ fontFamily: 'cursive' }}>
                &copy; {new Date().getFullYear()} My 70's App
            </Typography>
        </footer>
    );
};

export default Footer;