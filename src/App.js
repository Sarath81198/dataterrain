import { useEffect } from 'react'
  ; import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopNav from './components/TopNav';
import SideBar from './components/SideBar';
import LandingPage from './components/pages/LandingPage';

function App() {

  useEffect(() => {
    const initialValue = document.body.style.zoom;

    // Change zoom level on mount
    if(document.body.style.zoom !== '90%')
    document.body.style.zoom = "90%";

    return () => {
      // Restore default value
      document.body.style.zoom = initialValue;
    };
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0966c2'
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopNav />
        <SideBar />
        <LandingPage />
      </ThemeProvider>
    </div>
  );
};

export default App;
