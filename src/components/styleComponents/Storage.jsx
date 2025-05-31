import React from 'react'

export const Storage = ({ usedStorage, totalStorage, onUpgrade }) => {
  const storagePercentage = (usedStorage / totalStorage) * 100
  
  return (
    <div className="bg-violet-200 p-5 rounded-lg ">
      <h2 className='text-lg font-semibold text-neutral-800'>Storage</h2>
      <div className="w-full bg-[rgba(255,255,255,0.3)] h-[10px] rounded-[5px] my-2">
        <div 
          className="bg-white h-full rounded-[5px]" 
          style={{ width: `${storagePercentage}%` }}
        ></div>
      </div>
      <p className='text-neutral-700'>Using {usedStorage}MB of {totalStorage}MB</p>
      <button 
        className="bg-violet-900 text-white border-none px-4 py-2 rounded mt-2.5 cursor-pointer hover:bg-violet-950 "
        onClick={onUpgrade}
      >
        Upgrade Plan
      </button>
    </div>
  )
}