import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

import { CssBaseline, Paper } from '@mui/material';


const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Router>
      <Header />
      <CssBaseline />
      <Paper style={{ flex: '1', padding: '1rem' }}>
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Paper>
      <Footer />
    </Router>
  </div>
);

export default App;