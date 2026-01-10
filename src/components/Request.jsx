import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/connectionRequestSlice'
import RequestCard from './RequestCard'


const Request = () => {
    const dispatch = useDispatch();
    const request = useSelector(store=>store.connectionRequest)
    const fetchRequest = async()=>{
          const connRequest = await axios.get(BASE_URL+'user/request/received' , {withCredentials:true})

          dispatch(addRequest(connRequest.data.data));

    }

    useEffect(()=>{
         fetchRequest();
    },[])
    console.log(request)

    if(request === null) return ;

    if(request.length === 0) return<div className='text-center font-bold mt-5'>No request found</div>
    return (
        <div className='text-center my-5 w-1/2 sm:w-1/3 mx-auto'>
        <h1 className='text-2xl font-bold'>Connection Requests</h1> 
        {
            request.map((user)=><RequestCard key={user._id} user={user}/>) 
        }
        </div>
   )
}

export default Request