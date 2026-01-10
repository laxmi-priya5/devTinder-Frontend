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
import { useState } from 'react'
import api from '../utils/api'
const Body = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/profile/view`,
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
    } catch (err) {
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
       fetchUser();
  } , [])
    if (loading) return <div>Loading...</div>;
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Body