import React, { useContext } from 'react'
import { themeContext } from '../providers/theme.provider'

function SearchContainer({ handleClick, username, handleChange, error }) {
    const { darkMode } = useContext(themeContext)

    return (
        <div className={darkMode ? 'search--container search--container-dark' : 'search--container search--container-light'}>
            <div className='search--card'>
                <img src='/assets/icon-search.svg' alt='search' className='search--icon' />
                <input
                    placeholder='Search GitHub username…'
                    className={darkMode ? 'search--input-dark' : 'search--input-light'}
                    defaultValue={username}
                    onChange={handleChange}

                />
            </div>
            {error && (
                <div className='error--message'>Not Results</div>
            )}
            <button className='search--button' onClick={handleClick}>
                Search
            </button>

        </div>
    )
}

export default SearchContainer