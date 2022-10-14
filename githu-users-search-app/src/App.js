import './App.css';
import {ThemeProvider} from './providers/theme.provider'
import Container from './components/Container';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
