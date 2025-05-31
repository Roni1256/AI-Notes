import React from 'react'

const Sections=({title,description,icon:Icon,id})=>{
    return (
        <div className='mt-7 max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 dark:text-white rounded-lg ' id={id.trim}>
            <h1 className='text-2xl md:text-3xl font-bold flex gap-3 items-center text-gray-800 dark:text-white'><Icon size={35} className='stroke-blue-600'/>{title}</h1>
            <div className='mt-6 text-gray-700 dark:text-gray-300 leading-relaxed'>
                <p className='mb-4 '>{description}</p>
            </div>
        </div>
    )
}

export default Sections
