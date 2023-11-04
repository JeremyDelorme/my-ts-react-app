import React from 'react';
import { Typography, Container, Paper, Button, useTheme, CssBaseline, Grid } from '@mui/material';

import heroImage from '../images/heroImage.jpg'; // Adjust the path as needed

const Home: React.FC = () => {
    const theme = useTheme();

    const paperStyle: React.CSSProperties = {
        // background: `radial-gradient(circle, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        backgroundColor: '#FFFBF0',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
    };

    const imageBoxStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
    };

    const roundedImageStyle: React.CSSProperties = {
        width: '100%',
        borderRadius: '4px', // Add a slight border-radius for rounded corners
    };

    const textBoxStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <>
            <CssBaseline />
            <Paper elevation={8} style={paperStyle}>
                <Container maxWidth="xl">
                    <Grid container justifyContent="space-between">
                        <Grid item xs={12} md={6} style={imageBoxStyle}>
                            <img
                                src={heroImage}
                                alt="Your Image Description"
                                style={roundedImageStyle}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={textBoxStyle}>
                            <Typography variant="h4" gutterBottom>
                                Your Title
                            </Typography>
                            <Typography variant="body2" style={{ textAlign: 'center' }}>
                                Your description text goes here.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    );
};

export default Home;
