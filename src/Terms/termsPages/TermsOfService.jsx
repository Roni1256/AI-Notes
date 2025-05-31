import { Ban, Copy, FileText, HandCoins, Landmark, Link, Phone, Replace, User, Users, WholeWord } from 'lucide-react'
import React from 'react'
import Sections from '../../components/terms/Sections'
import Banner from '../../components/terms/Banner'
import Contact from '../../components/terms/Contact'

const TermsOfService = () => {
  return (
    <div className="mt-10">
        <Banner/>
        <div className='mt-10 max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg '>
            <h1 className='text-3xl font-bold flex gap-3 items-center text-gray-800 dark:text-gray-200' id='introduction'><FileText size={35} className='stroke-blue-600'/>Introduction</h1>
            <div className='mt-6 text-gray-700 dark:text-gray-300 leading-relaxed'>
                <p className='mb-4'>For the purpose of these Terms and Conditions:</p>
                <ol className='list-decimal list-inside space-y-4 ml-4'>
                    <li className='p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg'>
                        The terms "we", "us", "our" refer to <span className='font-medium text-blue-600'>Prasanth Thanapal</span>, whose registered/operational office is at:
                        <address className='mt-2 italic ml-4'>
                            2, Amman Nagar, Krishna Street,<br/>
                            Sirupulluvapatti, Tirupur,<br/>
                            Tamil Nadu 641603
                        </address>
                    </li>
                    <li className='p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg'>
                        The terms "you", "your", "user", and "visitor" refer to any natural or legal person accessing our website and/or purchasing from us.
                    </li>
                </ol>
                <p className='mt-6 font-medium'>
                    By using this website and/or purchasing from us, you agree to be bound by the following Terms and Conditions.
                </p>
            </div>
        </div>
        <Sections 
        title={"Website Content and Accuracy"}
        description={"The content of this website is provided for general information and use only. It is subject to change without prior notice. While we strive for accuracy, neither we nor any third parties provide any warranty or guarantee regarding the correctness, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such issues to the fullest extent permitted by law."}
        icon={WholeWord}
        id="website-content-and-accuracy"
        />
       <UserResponsibility id="user-rights-and-responsibilities"/>
        <Sections
        title={"Prohibited Use"}
        description={"Unauthorized use of this website or any of its content may give rise to a claim for damages and/or may be considered a criminal offense. You may not create a link to this website from another website or document without our prior written consent."}
        icon={Ban}
        id="prohibited-use"
        />

        <IntellectualProperties id="intellectual-properties"/>
        <Sections
        title={"External Links"}
        description={"From time to time, our website may include links to other websites. These links are provided for your convenience to provide additional information and to improve your knowledge. They do not signify that we endorse the linked website(s), and we have no responsibility for the content of such sites."}
        icon={Link}
        id="external-links"

        />
        <Sections
        title={"Transactions and Payment Failures"}
        description={"We shall not be liable for any loss or damage arising directly or indirectly from a decline of authorization for any transaction due to the cardholder having exceeded the preset limit mutually agreed upon by us and our acquiring bank. Payment processing issues are solely the responsibility of the cardholder and the bank."}
        icon={HandCoins}
        id="transactions-and-payment"

        />
        <Sections
        title={"Governing Law"}
        description={"These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in relation to the use of this website or transactions carried out shall be subject to the jurisdiction of the courts located in <strong>Tirupur, Tamil Nadu, India.</strong>"}
        icon={Landmark}
        id="governing-law"
        />
        <Sections
        title={"Changes to Terms and Conditions"}
        description={"We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting the revised Terms and Conditions on this website. Your continued use of this website after such changes constitutes your acceptance of the revised Terms and Conditions."}
        icon={Replace}
        id="changes-to-terms-and-conditions"
        />
        <Contact/>
    </div>
  )
}

export default TermsOfService;

const UserResponsibility=({id})=>{
  return <div className="mt-7 max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg" id={id.trim()}>
    <h1 className="text-2xl md:text-3xl font-bold flex gap-3 items-center text-gray-800 dark:text-gray-200"><Users size={45} className='stroke-blue-600'/>User Rights and Responsibilities</h1>
    <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
            As a user of Thryo Connect, you have certain rights and responsibilities to ensure a positive experience for all community members:
        </p>
        <h1 className='text-2xl font-semibold mt-5'>Rights</h1>

        <ul className='list-disc list-inside space-y-4 ml-4 mt-2 bg-gray-100 dark:bg-neutral-800 p-5 rounded-md'>
            <li>Access to platform features according to your subscription plan</li>
            <li>Fair treatment and respect from community members</li>
            <li>Privacy protection as outlined in our Privacy Policy</li>
            <li>Ability to report inappropriate content or behavior</li>
            <li>Receive timely support for technical issues</li>
        </ul>
        <h1 className='text-2xl font-semibold mt-10'>Responsibilities</h1>
        <ul className='list-disc list-inside space-y-4 ml-4 mt-2 bg-gray-100 dark:bg-neutral-800 p-5 rounded-md'>
            <li>Adhering to our Community Guidelines</li>
            <li>Respecting intellectual property rights of others</li>
            <li>Providing constructive feedback and contributions</li>
            <li>Maintaining the security of your account</li>
            <li>Using the platform for its intended educational purposes and knowledge sharing.</li>
        </ul>
    
    </div>
  </div>
}

const IntellectualProperties=({id})=>{
    return <div className="mt-7 max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg" id={id.trim()}>
      <h1 className="text-2xl md:text-3xl font-bold flex gap-3 items-center text-gray-800 dark:text-gray-200"><Copy size={45} className='stroke-blue-600'/>Intellectual Properties and Copyrights</h1>
      <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside space-y-4 ml-4 bg-gray-100 dark:bg-neutral-800 p-5 rounded-md'>
                      <li>This website contains content and materials that are either owned by us or licensed to us for exclusive use.</li>

                      <li>The protected materials include (but are not limited to) the design, layout, structure, user interface, appearance, graphics, images, icons, videos, animations, written content, downloadable files, and overall visual presentation.</li>

                      <li>All such elements are protected under applicable intellectual property laws, including copyright, trademark, and design rights in India and other jurisdictions.</li>

                      <li>Unauthorized reproduction, distribution, transmission, modification, display, or performance of any material on this website is strictly prohibited unless explicitly permitted by us or as stated in a valid license or copyright notice.</li>

                      <li>Any trademarks, brand names, or logos not owned by us but appearing on the site are acknowledged as the property of their respective owners.</li>

                      <li>Any misuse or infringement of our intellectual property may result in legal action, including claims for damages or injunctive relief.</li>
                    </ul>      </div>
    </div>
  }

