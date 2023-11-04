import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

import { CssBaseline } from '@mui/material';

const App: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    minHeight="100vh"
  >
    <Router>
      <Header />
      <CssBaseline />
      <Paper
        style={{ flex: '1', padding: '1rem', backgroundColor: '#FFFBF0' }}
        component={Box} // Use Box component to ensure full width
      >
        <Box
          width="100%" // Set width to 100% to take up the full available width
          marginX="auto" // Center the content horizontally
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Paper>
      <Footer />
    </Router>
  </Box>
);

export default App;
