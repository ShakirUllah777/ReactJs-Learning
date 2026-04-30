import React from 'react'
import "./UserCard.css"
import lovepic from "../assets/lovepic.jpeg"

const UserCard = (props) => {
  return (
    <div className='user-cards'>
      <h1 id='name-id'>{props.name} </h1>
      <img id='user-img' src={lovepic} alt='love'/>
      <p id='user-desc'>{props.desc} </p>
    </div>
  )
}

export default UserCard
