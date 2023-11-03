import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Welcome to My App
            </Typography>
            <Typography variant="body1" align="center">
                This is the home page content.
            </Typography>
        </Container>
    );
};

export default Home;
