import React from 'react';
import { Typography, Button, CssBaseline, Grid, Box, Container, Paper } from '@mui/material';
import heroImage from '../images/heroImage.svg';
import formes from '../images/formes.svg';
import { makeStyles } from '@material-ui/core/styles';

import cartoon_1 from '../images/cartoon_1.png';
import cartoon_2 from '../images/cartoon_2.jpeg';
import cartoon_3 from '../images/cartoon_3.png';

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*': {
            fontFamily: 'Josefin Slab Thin, sans-serif',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Josefin Slab Thin, sans-serif',
        },
    },
    contentContainerAbout: {
        paddingTop: '400px',
        width: '50%'

    },
    contentContainerProjects: {
        paddingTop: '600px',
    },

    contentContainerContact: {
        paddingTop: '1100px',
        marginBottom: '100px'
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
    },
    rightContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stackedImage: {
        width: '80%',
        borderRadius: '4px',
        margin: '8px 0',
    },
    textStack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    outerContainer: {
        backgroundImage: `url(${formes})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center top', // Center the background image horizontally and vertically
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Box className={classes.outerContainer}>
                <Container maxWidth="xl" className={classes.contentContainer}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={6} className={classes.leftContent}>
                            <img src={heroImage} alt="Your Image Description" className={classes.stackedImage} />
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.rightContent}>
                            <div className={classes.textStack}>
                                <Typography variant="h3" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif' }}>
                                    Développeur Web Full-Stack
                                </Typography>
                                <Typography variant="h5" style={{ fontFamily: 'Josefin Slab Thin, sans-serif' }}>
                                    De beaux sites webs
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '40px', fontFamily: 'Josefin Slab Thin, sans-serif' }}>
                                    Davantage
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                <Container className={classes.contentContainerAbout}>
                    <Box>

                    </Box>
                    <Typography variant="h2" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                        À propos de moi
                    </Typography>

                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={4}>
                        <Typography variant="h6" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est?
                        </Typography>
                    </Box>
                </Container>

                <Container className={classes.contentContainerProjects}>
                    <Box>
                        <Typography variant="h2" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                            Mes projets
                        </Typography>
                    </Box>

                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={4}>
                        <Typography variant="h6" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae dolores ab facilis ullam, perspiciatis animi nemo repellat sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est?
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center" my={4}>
                        <Box mx={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <img src={cartoon_1} alt="Image 1" style={{ maxWidth: '100%', height: '400px' }} />
                            <Typography variant="h6" style={{ marginTop: '8px', fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                            </Typography>
                        </Box>
                        <Box mx={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <img src={cartoon_2} alt="Image 2" style={{ maxWidth: '100%', height: '400px' }} />
                            <Typography variant="h6" style={{ marginTop: '8px', fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                                quae dolores ab facilis ullam, perspiciatis animi nemo repellat
                            </Typography>
                        </Box>
                        <Box mx={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <img src={cartoon_3} alt="Image 3" style={{ maxWidth: '100%', height: '400px' }} />
                            <Typography variant="h6" style={{ marginTop: '8px', fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                                sunt quis sint saepe deserunt! Rem similique eveniet molestias nemo adipisci. Est?
                            </Typography>
                        </Box>
                    </Box>
                </Container>

                <Container className={classes.contentContainerContact}>
                    <Typography variant="h2" gutterBottom style={{ fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                        Contact
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={4}>
                        <Typography variant="h6" gutterBottom style={{ marginTop: '50px', fontFamily: 'Josefin Slab Thin, sans-serif', textAlign: 'center' }}>
                            jeremydelormeweb@gmail.com
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Home;
