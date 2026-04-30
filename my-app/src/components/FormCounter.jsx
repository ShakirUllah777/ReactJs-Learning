import React, { useState } from 'react'
import './FormCounter.css'

const FormCounter = () => {
    const[name, setName] = useState('');
  return (
    <div  className='user-form'>
      <input type="text" placeholder='Enter Name' onClick={(e)=> setName(e.target.value)} />
      <h2>Hello {name} </h2>
    </div>
  )
}

export default FormCounter
