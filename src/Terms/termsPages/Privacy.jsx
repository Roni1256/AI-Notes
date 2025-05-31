import React from 'react'
import Banner from '../../components/terms/Banner'
import Contact from '../../components/terms/Contact'

const Privacy = () => {
  return (
    <div className='mt-10 dark:bg-neutral-900'>
        <Banner/>
        <h1 className='mt-10 text-3xl font-semibold text-neutral-800 dark:text-white'>Privacy Policy</h1>
        <p className='mt-5 text-md p-4 text-justify bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md'>
        This Privacy Policy outlines how PRASANTH THANAPAL collects, uses, and protects any information you provide when using this website and/or purchasing from us. <br />
        We are committed to ensuring your privacy is protected. Should we ask you to provide certain identifiable information while using our services, you can be assured that it will only be used in accordance with this policy. <br />
        We may update this policy from time to time. Please check this page regularly to ensure you are aware of any changes.
        </p>
        <CollectInformations/>
        <UseInfo/>
        <CookiesUse/>
        <Controlling/>
        <Correcting/>
        <Contact/>
    </div>
  )
}

export default Privacy

const CollectInformations=()=>{
    return (
        <div className="mt-10" id='information-we-collect'>
            <h1 className='text-2xl font-semibold text-neutral-800 dark:text-white'>
                Informations We Collect
            </h1>
            <p className='text-neutral-800 dark:text-white p-3'>When you visit our website or interact with our services, we may collect a range of personal and non-personal information to help us provide a better experience. This includes, but is not limited to:</p>
            <ul className='space-y-4 p-4'>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Full Name</strong>
                    <p className='mt-1'>Your first and last name may be collected when you sign up, contact us, or participate in quizzes or community features.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Contact Information</strong>
                    <p className='mt-1'>We may collect your email address and phone number to communicate with you, send updates, respond to inquiries, or deliver relevant content.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Demographic Information</strong>
                    <p className='mt-1'>We may ask for your postal code, age, gender, education level, interests, or other demographic details to help us personalize your experience and suggest suitable packages.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Login Credentials</strong>
                    <p className='mt-1'>If you create an account, we may collect your username, password (encrypted), or third-party authentication data (such as Google Sign-In).</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Device and Browser Data</strong>
                    <p className='mt-1'>This includes information like IP address, browser type and version, time zone settings, and operating system, used for analytics and security.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Usage Data</strong>
                    <p className='mt-1'>We collect data about how you interact with our platform—such as the pages visited, time spent, quizzes taken, answers submitted, and features used—to improve functionality.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Survey and Feedback Information</strong>
                    <p className='mt-1'>When you participate in user surveys, feedback forms, or special offers, we may collect responses, ratings, and other voluntary information.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Payment and Transaction Information</strong>
                    <p className='mt-1'>If you purchase a package, we may collect limited payment information required to complete the transaction (such as payment method, transaction ID), but we do not store your card or banking details.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>Profile Preferences</strong>
                    <p className='mt-1'>Your interests, subjects selected, progress, saved answers, or note-taking data may be stored to offer a personalized learning experience.</p>
                </li>
            </ul>
            <p className='mt-4 p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md text-sm'>This information is collected through forms, cookies, account registration, usage tracking, or direct communication, and is stored securely in accordance with our data protection policies.</p>
        </div>
    )
}
const UseInfo = () => {
    return (
        <div className="mt-10" id='how-we-use-information'>
            <h1 className='text-2xl font-semibold text-neutral-800 dark:text-white'>
                How We Use This Information
            </h1>
            <p className='text-neutral-800 dark:text-white p-3'>We use the information we collect from you for the following purposes:</p>
            <ul className='space-y-4 p-4'>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>To maintain internal records</strong>
                    <p className='mt-1'>Helps us track user activity, manage your account, and improve our operations.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>To improve our products and services</strong>
                    <p className='mt-1'>Your data helps us understand how you interact with our platform so we can enhance your experience.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>To send promotional emails</strong>
                    <p className='mt-1'>We may send you information about new packages, offers, and updates, using the email you provide.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>To conduct market research</strong>
                    <p className='mt-1'>Occasionally, we may contact you to gather feedback and insights via email, phone, or mail.</p>
                </li>
                <li className='bg-gray-50 dark:bg-neutral-800 dark:text-white p-3 rounded-md'>
                    <strong className='text-lg'>To personalize your experience</strong>
                    <p className='mt-1'>We may use your preferences to tailor the website's content and features to your interests.</p>
                </li>
            </ul>
            <p className='mt-4 p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md text-sm'>We are fully committed to protecting your data. Appropriate security measures are in place to prevent unauthorized access, disclosure, or misuse.</p>
        </div>
    )
}
const CookiesUse = () => {
    return (
        <div className="mt-10" id='how-we-use-cookies'>
            <h1 className='text-2xl font-semibold text-neutral-800 dark:text-white'>How we use cookies</h1>
            <p className='text-neutral-800 dark:text-white p-3'>A cookie is a small file which asks for permission to be placed on your device. Once agreed, the file is added and the cookie helps analyze web traffic or notifies you when you visit a particular site.</p>
            <div className="p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md">
                <p className='text-neutral-800 dark:text-white p-3'>We use cookies to:</p>
                <ul className='space-y-3 px-10 list-disc'>
                    <li className='bg-gray-50 dark:bg-neutral-700 rounded-md'>
                        <p className='mt-1'>Analyze which pages are being visited</p>
                    </li>
                    <li className='bg-gray-50 dark:bg-neutral-700 rounded-md'>
                        <p className='mt-1'>Improve our website to better serve user needs</p>
                    </li>
                    <li className='bg-gray-50 dark:bg-neutral-700 rounded-md'>
                        <p className='mt-1'>Personalize content based on your preferences</p>
                    </li>
                </ul>
            </div>
            <p className='mt-4 p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md text-sm'>
                Cookies do not give us access to your device or any data you do not voluntarily share. You may choose to accept or decline cookies. Most browsers accept cookies automatically, but you can modify your browser settings to decline cookies. However, this may limit the full functionality of our website.
            </p>
        </div>
    )
}
const Controlling = () => {
    return (
        <div className="mt-10" id='controlling-your-personal-information'>
            <h1 className='text-2xl font-semibold text-neutral-800 dark:text-white'>Controlling Your Personal Information</h1>
            <p className='text-neutral-800 dark:text-white p-3'>You have full control over how your personal information is used. You may choose to limit or restrict the use of your data in the following ways:</p>

            <div className="p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md">
                <h2 className='text-xl font-semibold mb-3'>Marketing Preferences:</h2>
                <p className='mb-4'>You can opt out of receiving marketing communications by unchecking relevant consent boxes in any form you submit on our website.</p>

                <h2 className='text-xl font-semibold mb-3'>Direct Requests:</h2>
                <p className='mb-4'>You may contact us at any time at prasanth0205t@gmail.com to request changes to your data preferences or opt out of direct marketing.</p>
            </div>

            <div className='mt-4 p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md'>
                <p className='mb-3'>We will not sell, distribute, or lease your personal information to third parties unless:</p>
                <ul className='space-y-3 px-10 list-disc'>
                    <li className='bg-gray-50 dark:bg-neutral-700 rounded-md'>
                        <p className='mt-1'>You have given us explicit permission</p>
                    </li>
                    <li className='bg-gray-50 dark:bg-neutral-700 rounded-md'>
                        <p className='mt-1'>We are required by law to do so</p>
                    </li>
                </ul>
            </div>

            <p className='mt-4 p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md text-sm'>
                We may use your personal data to send you promotional content about third-party products or services only if you have expressed interest in receiving such communications.
            </p>
        </div>
    )
}
const Correcting = () => {
    return (
        <div className="mt-10" id='correcting-your-information'>
            <h1 className='text-2xl font-semibold text-neutral-800 dark:text-white'>Correcting Your Information</h1>
            <div className='p-3 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md'>
                <p className='mb-3'>If you believe that any personal information we hold about you is incorrect, incomplete, or outdated, please contact us promptly.</p>
                <p>We will review and update your information as soon as possible to ensure it remains accurate and up to date.</p>
            </div>
        </div>
    )
}