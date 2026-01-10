import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {addUser} from '../utils/userSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Body = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const fetchUser = async()=>{
    if(user) return ;   // you are not refreshing yet
    try{
        const res = await axios.get(BASE_URL + 'profile/view',   // after refresh again het it through profile /view 
      {withCredentials:true}
      );
    
      dispatch(addUser(res.data));
    }catch(err){
       if(err.status === 401){  // if token is not valid or expired
        navigate('/login')
       }
    }
    
  }
  useEffect(()=>{
       fetchUser();
  } , [])
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Body