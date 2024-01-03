import React, {useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

  // const [data, setData] = useState([])

// useEffect(()=>{
//   fetch(`https://api.github.com/users/itshivamvyas`)
//   .then(response => response.json())
//   .then(data => {
//        setData(data)
//   })
// }, [])

  return (
    <div className="flex items-center justify-center flex-col">
    <div className='text-center m-4 text-orange-700 text-6xl p-6 font-bold'>
     Github Followers :- {data.followers}
    </div>
    <img className="rounded-full p-6" src={data.avatar_url} alt="User Not Found" width={400}/>

    <div className='border-4 border-solid border-orange-700 rounded-xl m-5'>
      <input type="text" placeholder='Enter Github User Id' className='p-2 text-l outline-none m-2'/>
      <button className='p-4 text-l bg-orange-700 text-white font-bold cursor-pointer'>Get Followers</button>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch(`https://api.github.com/users/hrvsdev`)
  return response.json
}