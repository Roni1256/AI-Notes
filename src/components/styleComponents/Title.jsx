import React from 'react'

const Title = ({title="",p=""}) => {
  return (
    <div className=''>
       <h1 className="text-2xl font-semibold text-neutral-800 ">{title}</h1>
       <p className='text-md text-gray-500'>{p}</p>
    </div>
  )
}

export default Title
