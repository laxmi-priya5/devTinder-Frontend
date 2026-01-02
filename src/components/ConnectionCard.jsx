import React from 'react'

const ConnectionCard = ({user}) => {
  
  return (
    <div className='bg-base-200 my-2 flex'>
        <div  className='w-20 h-20 rounded-full '><img className='h-full w-full object-cover' src={user.photoURL}/></div>
        <div className='my-auto mx-3 text-left'>
            <h2 className='font-bold'>{user.firstName} {user.lastName}</h2>
            <p>{user.about}</p>
        </div>
        
    </div>
  )
}

export default ConnectionCard