import React from 'react'
import {useState} from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const EditProfile = ({user}) => {
   
    const [firstName , setFirstName] = useState(user.firstName);
    const [lastName , setLastName] = useState(user.lastName);
    const [gender , setGender] = useState(user.gender);
    const [photo , setPhoto] = useState(user.photoURL|| "");
    const [age,setAge] = useState(user.age);
    const [about , setAbout] = useState(user.about);
    const [error , setError]= useState("");
    const [showToast , setShowToast] = useState(false);
    
    const dispatch = useDispatch();

    const saveEdit = async()=>{
        try{
           
            const response = await axios.patch(BASE_URL+'profile/edit' , 
            {
                firstName,   // here i can write firstName(key):FirstName(value) but key must be same in backend if i only write like firstName then that act as key and data in side that act as value
                lastName,
                age,
                gender,
                about,
                photoURL : photo,   
          
            },
            {withCredentials:true}
         );
        
         dispatch(addUser(response?.data?.user))
         setShowToast(true);
         setTimeout(()=>{
            setShowToast(false)
         },3000)
        }
        catch(err){
              setError(err.message)
        }
        

    }
  return (
    <>
      <div className="card card-side bg-base-100 w-2xl shadow-sm">
  <figure className='w-1/2'>
    {photo ? <img className=''
      src={photo}
      alt="profile" /> : <h2 className='font-bold flex justify-center items-center'>Upload Profile Photo</h2>}
  </figure>
  <div className="card-body">
    <h2 className="card-title">Edit Profile</h2>
    <label className="label">FirstName</label>
    <input type="text" className="input w-full" placeholder={firstName}  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    <label className="label">LastName</label>
    <input type="text" className="input w-full" placeholder={lastName} value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    <label className="label">Gender</label>
    <input type="ematextil" className="input w-full" placeholder={gender} value={gender} onChange={(e)=>setGender(e.target.value)}/>
    <label className="label">Age</label>
    <input type="text" className="input w-full" placeholder={age} value={age} onChange={(e)=>setAge(e.target.value)}/>
    <label className="label">About</label>
    <input type='text' className="input w-full" placeholder={about} value={about} onChange={(e)=>setAbout(e.target.value)}></input>
    <label className="label">Photo url</label>
    <input type="text" className="input w-full" placeholder={photo} value={photo} onChange={(e)=>setPhoto(e.target.value)}/>
    
      <button className="btn btn-primary text-xl" onClick={saveEdit}>save</button>
    
  </div>
      </div>
      {showToast && <div className="toast toast-top toast-center">
 
  <div className="alert alert-success">
    <span>Edit saved successfully</span>
  </div>
</div>}
    </>
    
  )
}

export default EditProfile