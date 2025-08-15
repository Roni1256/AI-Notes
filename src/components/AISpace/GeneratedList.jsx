import { History } from 'lucide-react'
import React from 'react'

const GeneratedList = ({generatedList=['java','c','programming']}) => {
  return (
    <div className='my-10 mb-30 max-h-[75vh] border-2 border-gray-300 w-[300px] overflow-auto rounded-lg p-5 bg-white flex flex-col  items-start '>
        <h2 className='text-lg text-neutral-400 mb-3 w-full flex items-center justify-between'>Activities <History /></h2>
        {
            generatedList.map((item, index) => (
                <button key={index} className=' hover:bg-gray-100 w-full p-2 text-left rounded-md cursor-pointer transition-all duration-300 ease-in-out' onClick={() => console.log(`Selected: ${item}`)}>
                    <h3 className=''>{item}</h3>
                </button>
            ))
        }
    </div>
  )
}

export default GeneratedList