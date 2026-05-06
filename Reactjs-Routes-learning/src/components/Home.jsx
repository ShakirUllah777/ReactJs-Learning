import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/about')
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleClick}>Move to About Page</button>
    </div>
  )
}

export default Home
