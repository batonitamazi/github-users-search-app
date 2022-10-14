import React, {useContext} from 'react'
import {themeContext} from './providers/theme.provider'
import MainCard from './components/MainCard'
import './App.css';

function App() {
  const {darkMode} = useContext(themeContext)
  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
        <MainCard />
    </div>
  );
}

export default App;
