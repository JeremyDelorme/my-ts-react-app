// Shop.tsx
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Shop: React.FC = () => {
    return (
        <Paper elevation={3} style={{ background: 'linear-gradient(90deg, #ff9566, #ff58c7)', padding: '16px' }}>
            <Container maxWidth="sm">
                <Typography variant="h2" gutterBottom style={{ fontFamily: 'cursive', color: '#fff' }}>
                    Shop
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'cursive', color: '#fff' }}>
                    Browse our groovy 70's merchandise.
                </Typography>
            </Container>
        </Paper>
    );
};

export default Shop;
