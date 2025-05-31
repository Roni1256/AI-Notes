import React, { useContext, useEffect, useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import NavBar from '../components/NavBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Breadcrumbs from '../components/styleComponents/Breadcrumbs'
import { UserContext } from '../App'
import { User } from 'lucide-react'

const Dashboard = () => {
  const [page, setPage] = useState('Home')
  const location = useLocation()
  const [user,setUser] = useContext(UserContext)
  const navigate=useNavigate()
  
  useEffect(() => {
    const path = location.pathname.split('/').pop() || 'Home'
    setPage(path.charAt(0).toUpperCase() + path.slice(1))
  }, [location.pathname])
  
  
  return (
    <div className='flex  w-full'>
        <NavBar/>
        <div className="h-screen overflow-auto w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="pl-20  md:pl-10 py-3 pt-6 border-b border-neutral-300 bg-white flex items-center justify-between pr-8">
              <h1 className="text-2xl font-semibold text-neutral-800">AI-Notes</h1>
              {!user ?
                <div className="flex gap-4">
                  <button className="px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors">Sign in</button>
                  <button className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors">Sign up</button>
                </div>:
                <div className="">
                  <button className='p-5 bg-gray-100 rounded-full hover:bg-gray-200 
                  border-2
                  border-neutral-300
                  hover:border-neutral-500
                   cursor-pointer flex items-center justify-center w-10 h-10 text-gray-700 font-medium transition-all text-2xl '
                   onClick={() => navigate('/profile')}>
                  {user.name[0].toUpperCase()}</button>                
                </div>
              }
            </div>
            {/* <Breadcrumbs/> */}
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard