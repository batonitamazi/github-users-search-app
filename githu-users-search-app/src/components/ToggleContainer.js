import React, {useContext} from 'react'
import { themeContext } from '../providers/theme.provider'
function ToggleContainer() {
  const {darkMode, toggleDarkMode} = useContext(themeContext)
  return (
    <div className='toggle-container'>
      <h1 className={darkMode ? 'header-light': 'header-dark'}>devFinder</h1>
      <button className={darkMode ? `toggle--button toggle--light` : `toggle--button toggle--dark`} onClick={toggleDarkMode}>
          {darkMode ? 'Light' : 'DARK'}
          <img src={darkMode ? './assets/icon-sun.svg' : './assets/icon-moon.svg'} alt='toggle button' className='toggle--image'/>
        </button>
    </div>
  )
}

export default ToggleContainer