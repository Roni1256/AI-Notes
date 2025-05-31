const CategoryCard = ({icon=undefined,title="none",topics=[],notes=""}) => {
    
  const maxTopics = 3; 
  return (
    <div className='group flex gap-6 p-4 rounded-lg border-2 border-gray-200 hover:border-red-400/60  transition-all ease-in-out duration-300 cursor-pointer w-[400px] bg-white'>
        <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 h-fit w-fit rounded-lg flex items-center justify-center text-blue-600 self-start shadow-sm">
            {icon}
        </div>
        <div className="overflow-hidden">
            <h1 className="text-xl font-bold text-neutral-800 group-hover:text-red-400 mb-2">{title}</h1>
            <div className="flex flex-wrap gap-2">
                {
                    topics.slice(0, maxTopics).map((topic,index)=>{
                        return(
                            <div key={index} className='text-sm text-gray-600 hover:text-gray-800 transition-colors'>
                                {topic.name}{index < Math.min(topics.length, maxTopics) - 1 ? ',' : ''}
                            </div>
                        ) 
                    })
                }
                {topics.length > maxTopics && <div className='text-sm text-gray-500 italic'>+{topics.length - maxTopics} more...</div>}
            </div>
            <div className='text-xs mt-4 text-gray-500 font-medium'>{notes} notes</div>
        </div>
    </div>
  )
}

export default CategoryCard