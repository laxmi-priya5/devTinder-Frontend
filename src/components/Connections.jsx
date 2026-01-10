import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'
import { useSelector } from 'react-redux'
import ConnectionCard from './ConnectionCard'
const Connections = () => {
    const dispatch = useDispatch();
    const connection = useSelector(store=>store.connection)
    const fetchConnections = async()=>{
        try{
            const response = await axios.get(BASE_URL+'user/connections',{withCredentials:true});
            dispatch(addConnection(response.data.data))
        }catch(err){

        }
    }
    useEffect(()=>{
        fetchConnections();
    },[])

    if(connection === null) return ;

    if(connection.length === 0) return <h1>Please connect with people....</h1>

    
  return (
    <div className='text-center my-5 w-1/2 mx-auto'>
       <h1 className='text-2xl font-bold'>Connections</h1> 
       {
        connection.map((connector)=><ConnectionCard key={connector._id} user={connector}/>) 
       }
    </div>
  )
}

export default Connections