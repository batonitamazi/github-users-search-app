import React from 'react'
import UserContainer from './aboutUser/UserContainer'
import SearchContainer from './SearchContainer'
import ToggleContainer from './ToggleContainer'

function MainCard() {
  return (
    <div className='main--container'>
        <ToggleContainer />
        <SearchContainer />
        <UserContainer />
    </div>
  )
}

export default MainCard