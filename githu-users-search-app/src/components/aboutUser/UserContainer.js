import React, { useContext } from 'react'
import { themeContext } from '../../providers/theme.provider'

function UserContainer() {
  const { darkMode } = useContext(themeContext)
  return (
    <div className={darkMode ? 'info--container info--container-dark' : 'info--container info--container-light'}>
      <img src='/assets/Bitmap.png' alt='avatar' id='avatar' className='avatar--image' />
      <div className='user--info'>
        <div className='user--info-header'>
          <div className='sub--header'>
            <h1 className={darkMode ? 'header-light' : 'header-dark'}>The Octocat</h1>
            <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}
            >
              Joined 25 Jan 2011
            </p>
          </div>
          <p className='user--link'>@octocat</p>
          <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div className={darkMode ? 'general--info-card general--info-card-dark' : 'general--info-card general--info-card-light'}>
          <div className='sub--info'>
            <p className={darkMode ? 'sub--info-par sub--info-par-dark' : 'sub--info-par sub--info-par-light'}>
              Repos
            </p>
            <h4 className={darkMode ? 'sub--info-head sub--info-head-dark' : 'sub--info-head sub--info-head-light'}>8</h4>
          </div>
          <div className='sub--info'>
            <p className={darkMode ? 'sub--info-par sub--info-par-dark' : 'sub--info-par sub--info-par-light'}>
              Followers
            </p>
            <h4 className={darkMode ? 'sub--info-head sub--info-head-dark' : 'sub--info-head sub--info-head-light'}>3938</h4>
          </div>
          <div className='sub--info'>
            <p className={darkMode ? 'sub--info-par sub--info-par-dark' : 'sub--info-par sub--info-par-light'}>
              Following
            </p>
            <h4 className={darkMode ? 'sub--info-head sub--info-head-dark' : 'sub--info-head sub--info-head-light'}>9</h4>
          </div>
        </div>
        <div className='extra--info-card'>

        </div>
      </div>
    </div>
  )
}

export default UserContainer