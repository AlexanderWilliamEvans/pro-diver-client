import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { RecoilRoot } from 'recoil';
import { Sidebar } from './components/layout/sidebar/Sidebar';
import AppRouter from './components/routing/AppRouter';
import { Navbar } from './components/layout/navbar/Navbar';
import { Box, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[800],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
   
 
<>
<RecoilRoot>
<ThemeProvider theme={theme}>
<Box sx={{ display: 'flex' }}>
<CssBaseline />
    <Navbar />
    <Sidebar />
    <Container maxWidth="lg" sx={{marginTop: '70px'}}>
    <AppRouter />
    </Container>
    </Box>
    </ThemeProvider>
</RecoilRoot>
 </>
  )
}