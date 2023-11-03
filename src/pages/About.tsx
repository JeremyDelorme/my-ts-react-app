import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About: React.FC = () => {
    return (
        <Paper elevation={3} style={{ background: 'linear-gradient(90deg, #ff9566, #ff58c7)', padding: '16px' }}>
            <Container maxWidth="sm">
                <Typography variant="h2" gutterBottom style={{ fontFamily: 'cursive', color: '#fff' }}>
                    About the 70's
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'cursive', color: '#fff' }}>
                    Learn more about the groovy 70's, the music, fashion, and the culture.
                </Typography>
            </Container>
        </Paper>
    );
};

export default About;