import React, { useContext } from 'react'
import { themeContext } from '../providers/theme.provider'

function SearchContainer() {
    const { darkMode } = useContext(themeContext)
    return (
        <div className={darkMode ? 'search--container search--container-dark' : 'search--container search--container-light'}>
            <div className='search--card'>
                <img src='/assets/icon-search.svg' alt='search' className='search--icon' />
                <input placeholder='Search GitHub username…' className={darkMode ? 'search--input-dark' : 'search--input-light'} />
            </div>
            <button className='search--button'>
                Search
            </button>
        </div>
    )
}

export default SearchContainer