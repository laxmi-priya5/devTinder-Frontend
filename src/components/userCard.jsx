import React from 'react'
import { BASE_URL } from '../utils/constants';
import { removeFeed } from '../utils/feedSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const UserCard = ({user}) => {
  if (!user) return null;
    console.log("user",user)
    const {firstName , lastName , photoURL , about, _id}=user;
   
    console.log("firstName" , firstName)
     const dispatch = useDispatch();
    const handleFeed = async(status,userId)=>{
      try{ 
          const res =await  axios.post(BASE_URL+'request/send/'+status+'/'+userId , {},{withCredentials:true})
          console.log("res",res)
           dispatch(removeFeed(userId))

      }catch(err){
        console.log(err.response?.data || err.message)
      }
    }
  return (
    <div className="card bg-base-200 w-70 h-120 shadow-sm ">
  <figure className="px-10 pt-10">
    <img  
      src={photoURL}
      alt="profile"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName + " "+lastName}</h2>
    <p>{about}</p>
    <div className="card-actions gap-7">
      <button className="btn btn-primary " onClick={()=>handleFeed("ignored" ,_id )}>Ignore</button>
      <button className="btn btn-primary" onClick={()=>handleFeed("interested" ,_id )}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard