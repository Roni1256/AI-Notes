import Title from '../components/styleComponents/Title'
import React from 'react'
import ProfileTab from './Profile/ProfileTab'
import SecurityTab from './Profile/SecurityTab'
import Button from '../components/Universal/Button'
import { axiosInstance } from '../context/axios'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate=useNavigate()
  const logout=async()=>{
    try {
      const resp=await axiosInstance.get('auth/logout');
      console.log(resp);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className=' p-6'>
        <Title title='Profile' p='Manage your profile settings and preferences'/>

        <div className="mt-10 max-w-1/2">
            <ProfileTab/>
            <SecurityTab/>
            <Button variant="danger" onClick={logout}>Logout</Button>
        </div>
    </div>
  )
}

export default Profile



