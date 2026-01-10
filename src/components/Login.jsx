import React from 'react'
import {useState} from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
const Login = ()=>{
   
    const [emailId , setEmail]= useState(""); 
    const [password , setPassword]=useState("");
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [isLoggedIn , setIsLoggedIn] = useState(true);
    const [err , setErr] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleLogin = async ()=>{
        try{
        
           const response = await axios.post(BASE_URL+"login",{
                emailId,
                password
            },{withCredentials:true})
           
            dispatch(addUser(response.data))
            return navigate('/');
        }
        catch(err){
           console.error(err?.response?.data)
           setErr(err?.response?.data);
        }
        

    }

    const handleSignUp = async()=>{
        try{
             const res = await axios.post(BASE_URL+'signup',{firstName,lastName,emailId,password},{withCredentials:true})
             dispatch(addUser(res.data.data))
            navigate('/profile', { replace: true });
        }catch(err){
          console.error(err?.res?.data)
           setErr(err?.response?.data || "Something went wrong");

        }
    }
    return(
        <div className='flex justify-center my-10'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  ">
            <div className='mb-1 text-xl font-bold text-gray-400 text-center'>{isLoggedIn?"Login":"Sign up"}</div>
            {!isLoggedIn && <>
            <label className="label">FirstName</label>
            <input type="text" className="input" placeholder="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <label className="label">LastName</label>
            <input type="text" className="input" placeholder="LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </>}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" value={emailId} onChange={(e)=>setEmail(e.target.value)}/>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p className='text-red-800'>{err}</p>
            <button className="btn btn-neutral mt-4" onClick={isLoggedIn?handleLogin:handleSignUp}>{isLoggedIn?"Login":"Sign up"}</button>
            {isLoggedIn ? <div className='text-center'>
                <p>Don’t have an account?</p>
            <h3 className='font-bold cursor-pointer' onClick={()=>setIsLoggedIn(!isLoggedIn)}>Please sign up to continue.</h3></div>
            
            : <div className='text-center'>
                <p>Already have an account?</p>
                <h3 className='font-bold cursor-pointer' onClick={()=>setIsLoggedIn(!isLoggedIn)}>Sign in here.</h3>
            </div>}
       </fieldset>
        </div>
    )
}
export default Login