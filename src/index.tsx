import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#66a5ad', // A shade of teal
    },
    secondary: {
      main: '#ff8f1a', // A shade of orange
    },
    error: {
      main: '#c9184a', // A shade of pink or any other color you like
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
