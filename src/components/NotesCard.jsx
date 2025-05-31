import React from 'react'
import { Star, Trash } from 'lucide-react'

const NotesCard = ({ title = "Computer Science", content = "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category = "Computer and Technology", updatedAt = "2 days ago", onClick }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
  }

  const borderColors = ['border-blue-200', 'border-red-200', 'border-green-200', 'border-yellow-200', 'border-purple-200', 'border-pink-200', 'border-indigo-200']
  const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)]

  return (
    <div onClick={onClick} className={`p-4 rounded-lg border-2 cursor-pointer border-gray-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out`}>
        <div className="flex w-full items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        <div className="flex items-center gap-2">
            <button className="hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 rounded-md p-2 transition-colors duration-200">
            <Star size={20} className="text-yellow-500 hover:fill-yellow-500" />
            </button>
            <button className="hover:bg-red-50 focus:ring-2 focus:ring-red-100 rounded-md p-2 transition-colors duration-200">
            <Trash size={20} className="text-red-500" />
            </button>
        </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: truncateText(content,100) }}>
        </p>
        <div className="mt-6 flex w-full justify-between items-center">
        <span className="font-medium text-gray-500 text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Updated {updatedAt}
        </span>
        <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-xs font-semibold hover:bg-gray-200 transition-colors duration-200">
            {category}
        </span>
        </div>
    </div>
  )
}

export default NotesCard