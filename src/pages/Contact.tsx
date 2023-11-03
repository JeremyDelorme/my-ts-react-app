import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Paper elevation={3} style={{ background: 'linear-gradient(90deg, #ff9566, #ff58c7)', padding: '16px' }}>
            <Container maxWidth="sm">
                <Typography variant="h2" gutterBottom style={{ fontFamily: 'cursive', color: '#fff' }}>
                    Get in Touch
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'cursive', color: '#fff' }}>
                    You can reach us by email or phone. We're here to help you groove!
                </Typography>
                <Button variant="contained" color="primary">
                    Email Us
                </Button>
                <Button variant="contained" color="secondary">
                    Call Us
                </Button>
            </Container>
        </Paper>
    );
};

export default Contact;
