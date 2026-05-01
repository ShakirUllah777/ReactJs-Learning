import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0);


  // variation - 1
  // useEffect(() => {
  //   alert('page loaded.......')
  // }) // run on each runder - loaded

  // variation - 2
  // useEffect(() => {
  //   alert('I wil run just once...')
  // }, []) // run just on 1st variation loading

  // Variation - 3
  useEffect(() => {
    alert('Just run on Upaded Count')
  }, [count])
  


  function handleclick() {
    setCount(count + 1);
  } 
  
  

  return (
    <>
      <button onClick={handleclick}>
        Click me
      </button>
      <br />
      Count is: {count}
    </>
  )
}

export default App
