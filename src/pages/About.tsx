import React from 'react';
import { Typography, Box, Container, Paper } from '@mui/material';
import cartoon_1 from '../images/cartoon_1.png';
import cartoon_2 from '../images/cartoon_2.jpeg';
import cartoon_3 from '../images/cartoon_3.png';

const About: React.FC = () => {
    return (
        <Paper elevation={3} style={{ background: 'linear-gradient(90deg, #ff9566, #ff58c7)', padding: '16px' }}>
            <Box style={{ paddingLeft: '100px', paddingTop: '100px', marginTop: '30px', color: '#FFFBF' }}>
                <Container>
                    <Typography variant="h2" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                        À propos de moi
                    </Typography>

                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={4}>
                        <Typography variant="h6" gutterBottom style={{ width: '50%', fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est?
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Paper>
    );
};

export default About;
