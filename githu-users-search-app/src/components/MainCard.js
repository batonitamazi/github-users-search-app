import React, {useState } from 'react'
import UserContainer from './aboutUser/UserContainer'
import SearchContainer from './SearchContainer'
import ToggleContainer from './ToggleContainer'
import axios from 'axios'

function MainCard() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const handleClick = () => {
    userInfo();
    setError(false);
  }
  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const userInfo = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then((resp) => resolve(setData(resp.data)))
      .catch((error) => setError(true))
  })
  return (
    <div className='main--container'>
      <ToggleContainer />
      <SearchContainer handleClick={handleClick} username={username} handleChange={handleChange} error={error}/>
      {data && (
        <UserContainer data={data} />
      )}
    </div>
  )
}

export default MainCard