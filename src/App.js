import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopNav from './components/TopNav';
import SideBar from './components/SideBar';
import LandingPage from './components/pages/LandingPage';

function App() {
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
}

export default App;
