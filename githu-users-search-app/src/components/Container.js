import React, {useContext} from 'react'
import { themeContext } from '../providers/theme.provider'

function Container() {
  const {darkMode, toggleDarkMode} = useContext(themeContext)
  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
        <button className={darkMode ? `toggle--button toggle--light` : `toggle--button toggle--dark`} onClick={toggleDarkMode}>
          {darkMode ? 'Light' : 'DARK'}
          <img src={darkMode ? './assets/icon-sun.svg' : './assets/icon-moon.svg'} alt='toggle button' className='toggle--image'/>
        </button>
    </div>
  )
}

export default Container