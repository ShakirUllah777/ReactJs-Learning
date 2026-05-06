import React from 'react'
import { useParams } from 'react-router-dom'

const Students = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>Student Id is {id} </h1>
    </div>
  )
}

export default Students
