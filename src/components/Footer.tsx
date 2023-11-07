import React from 'react';
import { Typography } from '@mui/material';

const styles = {
    footer: {
        background: '#969696',
        padding: '16px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',       // Center vertically
        justifyContent: 'center',   // Center horizontally
        fontFamily: 'Josefin Slab, sans-serif',
    },
};

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                &copy; {new Date().getFullYear()} My 70's App
            </Typography>
        </footer>
    );
};

export default Footer;
