import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SecondSideBar from '../components/terms/SecondSideBar'
const SideBar=({terms="",privacy="",community=""})=>{
  const li="transition-all duration-300 ease-in-out  font-semibold text-[#0052CC] dark:text-blue-400  hover:cursor-pointer hover:underline"
  const navigate=useNavigate()
  return(
    <aside className=' mt-5 lg:max-w-[300px]'>
      <ol className='flex flex-col gap-6 p-4 bg-gray-100/50 dark:bg-neutral-800/50 rounded-lg'>
        <h1 className='text-neutral-800 dark:text-white text-xl font-semibold'>Legal Document</h1>
        <li className={li} onClick={()=>{navigate(terms)}}>Terms of Service</li>
        <li className={li} onClick={()=>{navigate(privacy)}}>Privacy Policy</li>
        <li className={li} onClick={()=>{navigate(community)}}>Community Guidelines</li>
      </ol>
      <div className="mt-10 rounded-lg bg-blue-200/50 dark:bg-blue-900/50 py-4 px-3 ">
        <h1 className='text-xl font-semibold text-neutral-800 dark:text-white'>Need Support?</h1>
        <p className='text-neutral-600 dark:text-neutral-300 mt-3'>If you have any questions about our policies, please contact our support team.</p>
        <button className='mt-5 text-blue-700 dark:text-blue-400 font-semibold'>Contact Support</button>
      </div>
    </aside>
  )
}

const Terms = () => {
  return (
    <div className='p-10 dark:bg-neutral-900 dark:text-white'>
      <div className="">
        <h1 className='text-3xl font-semibold'>Terms of Service</h1>
        <p className='text-sm  text-neutral-700 dark:text-white'> Last Updated: April 30,2025</p>
      </div>
      <div className="flex flex-col w-full lg:flex-row  gap-10 mt-10 ">
        <SideBar/>
        <div className="h-screen overflow-auto scroll-smooth">
          <Outlet/>
        </div>
        <SecondSideBar/>
      </div>
    </div>
  )
}
export default Terms