import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SecondSideBar = () => {
    const [onPage,setOnPage]=useState([])
    const location=useLocation().pathname
    
    useEffect(()=>{
        if(location.includes('terms&conditions')){
                    const obj=[
                        {content: "introduction", link: "#introduction"},
                        {content: "website content and accuracy", link: "#website-content-and-accuracy"},
                        {content: "user rights and responsibilities", link: "#user-rights-and-responsibilities"},
                        {content: "Prohibited use", link: "#prohibited-use"},
                        {content: "Intellectual Properties", link: "#intellectual-properties"},
                        {content: "External Links", link: "#external-links"},
                        {content: "Transactions and Payment", link: "#transactions-and-payment"},
                        {content: "Governing Law", link: "#governing-law"},
                        {content: "Changes to Terms and Conditions", link: "#changes-to-terms-and-conditions"}
                    ]            
                    setOnPage(obj)
        }else if(location.includes('privacy')){``
            const obj=[
                {content: "Information we collect", link: "#information-we-collect"},
                {content: "How we use Information", link: "#how-we-use-information"},
                {content: "How we use cookies", link: "#how-we-use-cookies"},
                {content: "Controlling Your Personal Information", link: "#controlling-your-personal-information"},
                {content: "Correcting Your Information", link: "#correcting-your-information"}
            ]
            setOnPage(obj)
        }else if(location.includes('community')){
                    const obj = [
                        {content: "Respectful Conduct", link: "#respectful-conduct"},
                        {content: "Harassment or Bullying", link: "#harassment-or-bullying"},
                        {content: "Cheating or Academic Misconduct", link: "#cheating-or-academic-misconduct"},
                        {content: "AI Usage Policy", link: "#ai-usage-policy"},
                        {content: "Content Posting Rules", link: "#content-posting-rules"},
                        {content: "Reporting Violations", link: "#reporting-violations"},
                        {content: "Penalties and Enforcement", link: "#penalties-and-enforcement"}
                    ]
            setOnPage(obj)
        }
    },[])
    
  return (
    <div className='w-full max-w-[300px] bg-gray-100 dark:bg-neutral-800 rounded-lg p-5 hidden lg:block h-fit mt-8'>
        <h1 className='text-neutral-800 dark:text-neutral-100 text-lg text-center font-semibold'>On This Page</h1>
        <div className="mt-5 flex flex-col gap-2">
            {
                onPage.map((element,i)=>{
                    return (
                        <a href={element.link} key={i} className='text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300 ease-in-out capitalize hover:underline text-sm'>{element.content}</a>
                    )
                })

            }
            <a href="#contact" className='text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300 ease-in-out capitalize hover:underline text-sm'>Contact</a>
        </div>
    </div>
  )
}

export default SecondSideBar