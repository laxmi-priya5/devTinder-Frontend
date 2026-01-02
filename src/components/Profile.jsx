import EditProfile from "./EditProfile"
import UserCard from "./userCard"
import { useSelector } from "react-redux"
const Profile = ()=>{
   
    const user = useSelector(store=>store.user);
    return(
        <div className="flex justify-center p-5">
        {user && <EditProfile user={user}/>}
       
        </div>
    )
}
export default Profile