import { EditorView } from '@tiptap/pm/view'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const File = () => {
    const location=useLocation()
    const data=location.state.note
    console.log(data);
    const [categoryColor,setCategoryColor]=useState('text-gray-700')
    const colors=['text-gray-700','text-violet-700','text-purple-700','text-yellow-700','text-red-700','text-green-700']
    const chooseCategoryColor=()=>{
        const category=data.category
        const c="asdfas"
        switch (category.toLowerCase()) {
            case "personal":
                setCategoryColor(colors[5])
                break;
            case "work":
                setCategoryColor(colors[4])
                break;
            case "study":
                setCategoryColor(colors[1])
                break;
            case "ideas":
                setCategoryColor(colors[2])
                break;
            case "projects":
                setCategoryColor(colors[3])
                break;
            default:
                setCategoryColor(colors[0])
                break;
        }
        
    }
    const addNotesToBody = () => {
        const main = document.getElementById('viewer')
        main.innerHTML += data.notes
    }
    useEffect(()=>{
        chooseCategoryColor()
        addNotesToBody()
    },[])
  return (
    <div className='p-6'>
        <header className='flex items-center justify-between w-full p-3 border-b-2 border-gray-300'>
            <div className="">
                <h1 className='text-3xl font-semibold'>{data.title}</h1>
                <p className={`text-lg font-semibold ${categoryColor} mt-2`}>{data.category}</p>
            </div>
            <div className="flex flex-col">
                <span className='text-gray-400'>Date: {data.createdAt.slice(0,10)}</span>
                <span className='text-gray-400'>Time: {data.createdAt.slice(11,16)}</span>
            </div>
        </header>
        <main id='viewer' dangerouslySetInnerHTML={{ __html: data.notes }} className='p-10'>
        </main>
    </div>
  )}

export default File