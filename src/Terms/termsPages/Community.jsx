import React from 'react'
import Banner from '../../components/terms/Banner'
import Contact from '../../components/terms/Contact'

const Community = () => {
  return (
    <div className="flex">
        <div className="max-w-4xl mx-auto px-4 py-8 dark:bg-neutral-900">
            <Banner/>
        <h1 className="text-3xl font-bold mb-6 mt-10 dark:text-white">Community Guidelines</h1>
        <p className="text-md text-justify mb-6 dark:text-gray-300">
            At PRASANTH THANAPAL's platform, we are committed to fostering a respectful, inclusive, and supportive environment for learners, creators, educators, and all community members. These Community Guidelines outline the standards of behavior expected across our platform.
        </p>

        <p className="text-md text-justify mb-8 dark:text-gray-300">
            By accessing or participating in any part of our services, you agree to abide by the following rules:
        </p>

        <div className="mb-8" id='respectful-conduct'>
            <h2 className="text-2xl text-neutral-800 font-semibold mb-4 dark:text-white" id='respectfull-content'>Respectful Conduct</h2>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>Treat all users with respect and dignity—disagreement is okay, but harassment or abuse is not.</li>
            <li>Personal attacks, discriminatory remarks, threats, or hate speech of any kind will not be tolerated.</li>
            <li>Avoid profanity or vulgar language. Keep discussions professional and constructive.</li>
            </ul>
        </div>

        <div className="mb-8" id="harassment-or-bullying">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">No Harassment or Bullying</h2>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>Harassment includes persistent unwanted contact, name-calling, doxing, or targeted abuse.</li>
            <li>Bullying in any form—public or private—will result in immediate suspension or banning.</li>
            <li>If you feel harassed or unsafe, report the behavior to our moderation team immediately.</li>
            </ul>
        </div>

        <div className="mb-8" id="cheating-or-academic-misconduct">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">No Cheating or Academic Misconduct</h2>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>Do not share or request answers to live assessments or exams.</li>
            <li>Posting fake quiz completions, using bots, or manipulating leaderboards is strictly prohibited.</li>
            <li>Respect the integrity of practice and learning. You're here to grow—earn it honestly.</li>
            </ul>
        </div>

        <div className="mb-8" id="ai-usage-policy">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">AI Usage Policy</h2>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>Use AI-powered features responsibly. Do not spam AI tools to generate large volumes of unnecessary or abusive content.</li>
            <li>AI-generated content (like code, questions, or solutions) should be relevant, ethical, and follow platform rules.</li>
            <li>You are responsible for verifying the accuracy of AI outputs before use.</li>
            </ul>
        </div>

        <div className="mb-8" id="content-posting-rules">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">Content Posting Rules</h2>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>Share helpful, original, and respectful content—questions, answers, and discussions should add value.</li>
            <li>Do not plagiarize or copy content from external sources without credit.</li>
            <li>Avoid off-topic posts, advertisements, affiliate links, or any form of self-promotion unless explicitly allowed.</li>
            </ul>
        </div>

        <div className="mb-8" id="reporting-violations">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">Reporting Violations</h2>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li>If you notice any behavior that violates these guidelines, please report it using our in-app report system or contact us directly.</li>
            <li>Reports are handled confidentially, and we appreciate your help in maintaining a safe space.</li>
            </ul>
        </div>

        <div className="mb-8" id="penalties-and-enforcement">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">Penalties and Enforcement</h2>
            <p className="mb-4 dark:text-gray-300">Violating our Community Guidelines may lead to the following actions:</p>
            <ul className="list-disc pl-6 space-y-2 dark:text-gray-300">
            <li><span className="font-semibold">Warning:</span> For minor or first-time violations.</li>
            <li><span className="font-semibold">Content Removal:</span> Inappropriate content may be deleted without notice.</li>
            <li><span className="font-semibold">Temporary Suspension:</span> You may lose access to some or all features.</li>
            <li><span className="font-semibold">Permanent Ban:</span> Serious or repeated violations may result in permanent removal from the platform.</li>
            </ul>
            <p className="mt-4 dark:text-gray-300">We reserve the right to enforce these rules at our discretion.</p>
        </div>
        <Contact/>
        </div>
    </div>
  )
}

export default Community