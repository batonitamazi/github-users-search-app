import React from 'react'
import SearchContainer from './SearchContainer'
import ToggleContainer from './ToggleContainer'

function MainCard() {
  return (
    <div className='main--container'>
        <ToggleContainer />
        <SearchContainer />
    </div>
  )
}

export default MainCard