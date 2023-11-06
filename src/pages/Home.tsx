import React from 'react';
import { Typography, Button, CssBaseline, Grid, Box, Container } from '@mui/material';
import heroImage from '../images/heroImage.svg';
import formes from '../images/formes.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*': {
            fontFamily: 'Josefin Slab Thin, sans-serif',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Josefin Slab Thin, sans-serif',
        },
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
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px'
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
                    <Grid container justifyContent="space-between">
                        <Grid item xs={12} md={6} className={classes.leftContent}>
                            <img src={heroImage} alt="Your Image Description" className={classes.stackedImage} />
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.rightContent}>
                            <div className={classes.textStack}>
                                <Typography variant="h3" gutterBottom style={{ paddingTop: '200px', paddingLeft: '40px', fontFamily: 'Josefin Slab Thin, sans-serif' }}>
                                    Développeur Web Full-Stack
                                </Typography>
                                <Typography style={{ paddingLeft: '40px', fontFamily: 'Josefin Slab Thin, sans-serif' }} variant="h5">
                                    De beaux sites webs
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginLeft: '40px', marginTop: '100px', fontFamily: 'Josefin Slab Thin, sans-serif' }}>
                                    Davantage
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Box style={{ marginTop: '30px', width: '100%' }}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" gutterBottom style={{ fontFamily: 'cursive', color: '#fff' }}>
                            About the 70's
                        </Typography>
                        <Typography variant="body1" style={{ fontFamily: 'cursive', color: '#fff' }}>
                            Learn more about the groovy 70's, the music, fashion, and the culture.
                        </Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" my={4}>
                            <Box textAlign="center">
                                <Typography variant="h3" gutterBottom>
                                    H3 Text
                                </Typography>
                                <Typography variant="h5">
                                    H5 Text
                                </Typography>
                            </Box>

                            <Box mx={4} display="flex" flexDirection="column" alignItems="center">
                                <img src="image1.jpg" alt="Image 1" style={{ maxWidth: '100%' }} />
                                <Typography variant="h6" style={{ marginTop: '8px' }}>H6 Text 1</Typography>
                            </Box>

                            <Box mx={4} display="flex" flexDirection="column" alignItems="center">
                                <img src="image2.jpg" alt="Image 2" style={{ maxWidth: '100%' }} />
                                <Typography variant="h6" style={{ marginTop: '8px' }}>H6 Text 2</Typography>
                            </Box>

                            <Box mx={4} display="flex" flexDirection="column" alignItems="center">
                                <img src="image3.jpg" alt="Image 3" style={{ maxWidth: '100%' }} />
                                <Typography variant="h6" style={{ marginTop: '8px' }}>H6 Text 3</Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>

            </Box>
        </>
    );
};

export default Home;
