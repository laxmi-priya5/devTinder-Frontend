import React from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import { useSelector } from 'react-redux'
import UserCard from './userCard'
const Feed = () => {
  const dispatch  = useDispatch();
  const feed = useSelector(store=>store.feed)

  
  const getFeed = async()=>{
    
     const res = await axios.get(BASE_URL+'feed',
      {withCredentials:true}
     )
     console.log("res",res);

     dispatch(addFeed(res?.data))
     if(!feed) return;
     if(feed.length === 0)  return <h1>No more user found</h1> 
  }
  useEffect(()=>{
      getFeed();
  },[])
  console.log("feed" , feed)
  
  return (
    <div className='flex justify-center p-2'>
       {feed && <UserCard user={feed[0]}/>}
       {/* {feed?.slice(0,1).map(user => (
  <UserCard key={user._id} user={user} />
))} */}

    </div>
  )
}

export default Feed