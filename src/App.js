import { ThemeProvider, createTheme, Box } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';

function App() {
  const [mode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Router>
          <Header />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
