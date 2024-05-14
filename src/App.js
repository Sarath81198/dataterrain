import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopNav from './components/TopNav';

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
        <Button variant='contained'>sdfef</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
