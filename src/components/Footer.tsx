import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer>
            <Typography variant="body2" color="textSecondary" align="center">
                © {new Date().getFullYear()} My App
            </Typography>
        </footer>
    );
};

export default Footer;
