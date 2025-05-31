import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container: "min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden",
  blobContainer: "absolute inset-0 overflow-hidden",
  blob1: "absolute -top-24 -right-24 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",
  blob2: "absolute top-48 -left-24 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000",
  blob3: "absolute -bottom-24 right-48 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000",
  blob4: "absolute -left-4 bottom-48 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000",
  contentWrapper: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative",
  textCenter: "text-center",
  heading1: "text-4xl tracking-tight font-black text-gray-900 sm:text-5xl md:text-6xl",
  headingSpan1: "block text-gray-700",
  headingSpan2: "block text-black",
  description: "mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
  buttonContainer: "mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",
  primaryButton: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10",
  secondaryButton: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-black hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10",
  featuresGrid: "mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
  featureCard: {
    wrapper: "pt-6",
    container: "flow-root bg-gradient-to-br from-white to-gray-50 rounded-xl px-6 pb-8 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-gray-100",
    iconContainer: "-mt-6",
    iconWrapper: "inline-flex items-center justify-center p-3 bg-black rounded-xl shadow-lg ring-4 ring-white",
    icon: "h-6 w-6 text-white",
    title: "mt-8 text-lg font-bold text-gray-900 tracking-tight",
    description: "mt-5 text-base text-gray-600"
  }
}

const Landing = () => {
      return (
        <div className={styles.container}>
          <div className={styles.blobContainer}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>
            <div className={styles.blob3}></div>
            <div className={styles.blob4}></div>
            <div className="absolute inset-0 animate-[pan_20s_linear_infinite]" style={{ 
              backgroundImage: 'radial-gradient(#000000 1.5px, transparent 1.5px)', 
              backgroundSize: '20px 20px',
              opacity: 0.1
            }}></div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.textCenter}>
              <h1 className={styles.heading1}>
                <span className={styles.headingSpan1}>Smart Notes with</span>
                <span className={styles.headingSpan2}>AI-Powered Insights</span>
              </h1>
              <p className={styles.description}>
                Transform your note-taking experience with AI-driven organization, summarization, and intelligent suggestions. Experience the future of note-taking today.
              </p>
              <div className={styles.buttonContainer}>
                <div className="rounded-md shadow-lg">
                  <Link to="/authenticate" className={styles.primaryButton} >
                    Get Started Free
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-3">
                  <a href="#" className={styles.secondaryButton}>
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
    
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard.wrapper}>
                <div className={`${styles.featureCard.container} to-gray-50 hover:shadow-gray-100`}>
                  <div className={styles.featureCard.iconContainer}>
                    <div className={styles.featureCard.iconWrapper}>
                      <svg className={styles.featureCard.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className={styles.featureCard.title}>AI-Powered Insights</h3>
                    <p className={styles.featureCard.description}>
                      Get intelligent suggestions and connections between your notes using advanced AI algorithms.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className={styles.featureCard.wrapper}>
                <div className={`${styles.featureCard.container} to-gray-50 hover:shadow-gray-100`}>
                  <div className={styles.featureCard.iconContainer}>
                    <div className={styles.featureCard.iconWrapper}>
                      <svg className={styles.featureCard.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className={styles.featureCard.title}>Smart Organization</h3>
                    <p className={styles.featureCard.description}>
                      Automatically categorize and organize your notes with smart tagging and clustering.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className={styles.featureCard.wrapper}>
                <div className={`${styles.featureCard.container} to-gray-50 hover:shadow-gray-100`}>
                  <div className={styles.featureCard.iconContainer}>
                    <div className={styles.featureCard.iconWrapper}>
                      <svg className={styles.featureCard.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className={styles.featureCard.title}>Rich Media Support</h3>
                    <p className={styles.featureCard.description}>
                      Add images, audio, and other media to your notes with automatic transcription and analysis.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className={styles.featureCard.wrapper}>
                <div className={`${styles.featureCard.container} to-gray-50 hover:shadow-gray-100`}>
                  <div className={styles.featureCard.iconContainer}>
                    <div className={styles.featureCard.iconWrapper}>
                      <svg className={styles.featureCard.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className={styles.featureCard.title}>Secure Storage</h3>
                    <p className={styles.featureCard.description}>
                      Your notes are encrypted and securely stored with enterprise-grade security measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Landing