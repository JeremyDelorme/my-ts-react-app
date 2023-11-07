// App.tsx
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

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const paperStyle = {
  flex: '1',
  padding: '1rem',
  backgroundColor: '#FFFBF', // Background color set to #FFFBF0
};

const App: React.FC = () => (
  <Box sx={appStyle}>
    <Router>
      <Header />
      <CssBaseline />
      <Paper sx={paperStyle}>
        <Box width="100%" marginX="auto">
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
