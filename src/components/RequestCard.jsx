import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constants'
import { removeRequest } from '../utils/connectionRequestSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const RequestCard = ({user}) => {
    const {firstName , lastName , photoURL} = user.fromUserId
    const dispatch = useDispatch();
    const request = useSelector(store=>store.connectionRequest)
    const handleClick = async(status,id)=>{
        // console.log(BASE_URL+'/request/review/'+status+"/"+id)
        try{
            const requestReview = await axios.post(BASE_URL+'request/review/'+status+"/"+id , {},{withCredentials:true})
            dispatch(removeRequest(id));

        }catch(err){
            
        }
    }
  return ( 
    <div className='bg-base-200 my-2 flex flex-col sm:flex-row'>
        <div  className='w-20 h-20 mt-2 sm:mt-0 rounded-full overflow-hidden mx-auto sm:mx-0'><img className='h-full w-full object-cover' src={photoURL}/></div>
        <div className='sm:items-center  text-left flex flex-col sm:flex-row mt-3 sm:mt-0 gap-5 mx-auto '>

            <h2 className='font-bold'>{firstName} {lastName}</h2>
            <div className="card-actions flex gap-3 ">
                <button className="btn btn-primary " onClick={()=>handleClick("accepted" , user._id)}>Accept</button>
                <button className="btn btn-primary" onClick={()=>handleClick("rejected" , user._id)}>Reject</button>
           </div>
        </div>
        
    </div>
  )
}

export default RequestCard