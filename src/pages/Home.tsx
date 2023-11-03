import React from 'react';
import { Container, Typography, Paper, useTheme } from '@mui/material';

const Home: React.FC = () => {
    const theme = useTheme();

    const paperStyle: React.CSSProperties = {
        background: `radial-gradient(circle, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
    };

    const titleStyle: React.CSSProperties = {
        fontFamily: 'cursive',
        color: '#FFA200', // Primary color
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const descriptionStyle: React.CSSProperties = {
        fontFamily: 'cursive',
        color: '#FD8B94', // Error color
        textAlign: 'center',
    };

    return (
        <Paper elevation={3} style={paperStyle}>
            <Container maxWidth="sm">
                <Typography variant="h2" gutterBottom style={titleStyle}>
                    Groovy Home Page
                </Typography>
                <Typography variant="body1" style={descriptionStyle}>
                    Welcome to the Home page! Let's take a trip back to the 70's.
                </Typography>
            </Container>
        </Paper>
    );
};

export default Home;
