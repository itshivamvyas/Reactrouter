import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-orange-700 text-6xl text-center p-20 font-bold leading-relaxed'>
    <p className='text-orange-900'>Your Input Is :- </p>{userId}.
    </div>
  )
}

export default User
