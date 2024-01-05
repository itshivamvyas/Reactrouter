import React, {useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])
  const [username, setUsername] = useState("itshivamvyas")

useEffect(()=>{
  onGetData()
}, [])

function onGetData(){
  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
       setData(data)
  })
}

  return (
    <div className="flex items-center justify-center flex-col">
    <div className='text-center m-4 text-orange-700 text-6xl p-6 font-bold'>
     Github Followers :- {data.followers}
    </div>
    <img className="rounded-full p-6" src={data.avatar_url} alt="User Not Found" width={400} />

    <form className='border-4 border-solid border-orange-700 rounded-xl m-5' onSubmit={e=>e.preventDefault()}>
      <input type="text" placeholder='Enter Github User Id' className='p-2 text-l outline-none m-2' value={username} onChange={(e)=>{
          setUsername(e.target.value)
      }}/>
      <button className='p-4 text-l bg-orange-700 text-white font-bold cursor-pointer' onClick={onGetData}>Get Followers</button>
    </form>
    </div>
  )
}

export default Github