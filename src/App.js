import { ThemeProvider, createTheme, Box } from '@mui/material';
import { useState } from 'react';
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
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;
