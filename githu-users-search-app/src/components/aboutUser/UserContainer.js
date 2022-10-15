import React, { useContext } from 'react'
import { themeContext } from '../../providers/theme.provider'

function UserContainer({ data }) {
  const { darkMode } = useContext(themeContext)
  const date = data?.created_at
  const year = date?.slice(0, 4);
  const month = date?.slice(5, 7);
  const day = date?.slice(8, 10);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return (
    <>
      {data && (
        <div className={darkMode ? 'info--container info--container-dark' : 'info--container info--container-light'}>
          <img src={data.avatar_url} alt='avatar' id='avatar' className='avatar--image' />
          <div className='user--info'>
            <div className='user--info-header'>
              <div className='sub--header'>
                <h1 className={darkMode ? 'header-light' : 'header-dark'}>{data.name}</h1>
                <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}
                >
                  Joined {day} {months[month-1]} {year}
                </p>
              </div>
              <p className='user--link'>@{data.login}</p>
              <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}>
                {data.bio}
              </p>
            </div>
            <div className={darkMode ? 'general--info-card general--info-card-dark' : 'general--info-card general--info-card-light'}>
              <div className='sub--info'>
                <p className={darkMode ? 'sub--info-par sub--info-par-dark' : 'sub--info-par sub--info-par-light'}>
                  Repos
                </p>
                <h4 className={darkMode ? 'sub--info-head sub--info-head-dark' : 'sub--info-head sub--info-head-light'}>{data.public_repos}</h4>
              </div>
              <div className='sub--info'>
                <p className={darkMode ? 'sub--info-par sub--info-par-dark' : 'sub--info-par sub--info-par-light'}>
                  Followers
                </p>
                <h4 className={darkMode ? 'sub--info-head sub--info-head-dark' : 'sub--info-head sub--info-head-light'}>{data.followers}</h4>
              </div>
              <div className='sub--info'>
                <p className={darkMode ? 'sub--info-par sub--info-par-dark' : 'sub--info-par sub--info-par-light'}>
                  Following
                </p>
                <h4 className={darkMode ? 'sub--info-head sub--info-head-dark' : 'sub--info-head sub--info-head-light'}>{data.following}</h4>
              </div>
            </div>
            <div className='extra--info-card'>
              <div className='extra--subinfo'>
                <div className='mini--info'>
                  <img src='/assets/icon-location.svg' alt='location' className='' />
                  <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}>
                    {data.location || 'not available'}
                  </p>
                </div>
                <div className='mini--info'>
                  <img src='/assets/icon-website.svg' alt='website' />
                  <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}>
                    {data.blog || 'not available'}
                  </p>
                </div>
              </div>
              <div className='extra--subinfo'>
                <div className='mini--info'>
                  <img src='/assets/icon-twitter.svg' alt='twitter' />
                  <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}>
                    {data.twitter || 'not available'}
                  </p>
                </div>
                <div className='mini--info'>
                  <img src='/assets/icon-company.svg' alt='company' className={darkMode ? 'toggle--dark-img' : 'toggle-light-img'} />
                  <p className={darkMode ? 'header--paragraph header--paragraph-dark' : 'header--paragraph header--paragraph-light'}>
                    {data.company || 'not available'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default UserContainer