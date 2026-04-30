import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [counter, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {counter} time</p>
        <button  onClick={()=> setCount(counter + 1) } >Click me</button>
    </div>
  )
}

export default Counter
