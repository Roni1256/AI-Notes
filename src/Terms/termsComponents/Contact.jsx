import { Phone } from 'lucide-react'
import React from 'react'

const Contact=()=>{
    return <div className="mt-7 max-w-4xl mx-auto p-6 bg-white rounded-lg" id='contact'>
        <h1 className='text-2xl md:text-3xl font-bold flex gap-3 items-center text-neutral-800'><Phone size={20} className='stroke-blue-600'/>Contact Information</h1>
        <div className="mt-6 text-neutral-800 leading-relaxed space-y-4">
            <div className="bg-gray-100 p-5 rounded-md">
                <h2 className='text-lg  mb-2'>Merchant Legal Entity</h2>
                <p className='font-medium'>PRASANTH THANAPAL</p>
            </div>
            
            <div className="bg-gray-100 p-5 rounded-md">
                <h2 className='text-lg  mb-2'>Registered Address</h2>
                <p className='font-medium'>2, Amman Nagar, Krishna Street,<br/>
                Sirupulluvapatti, Tirupur,<br/>
                Tamil Nadu – 641603</p>
            </div>

            <div className="bg-gray-100 p-5 rounded-md">
                <h2 className='text-lg mb-2'>Contact Details</h2>
                <p className='font-medium'>Phone: +91 98420 40777</p>
                <p className='font-medium'>Email: prasanth0205@gmail.com</p>
            </div>
        </div>
    </div>
}

export default Contact
