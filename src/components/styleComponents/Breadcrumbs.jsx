import React from 'react'
import { useLocation } from 'react-router-dom'
const styles = {
  nav: "flex",
  ol: "inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse",
  homeLink: "inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-800",
  homeSvg: "w-3 h-3 me-2.5",
  itemContainer: "flex items-center",
  arrowSvg: "rtl:rotate-180 w-3 h-3 text-gray-400 mx-1",
  link: "ms-1 text-sm font-medium text-neutral-700 hover:text-neutral-900 md:ms-2 ",
  currentPage: "ms-1 text-sm font-medium text-neutral-700 md:ms-2 hover:text-neutral-900 "}

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.ol}>
        <li className="inline-flex items-center">
          <a href="/" className={styles.homeLink}>
            <svg className={styles.homeSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            Home
          </a>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          
          return (
            <li key={name} aria-current={isLast ? "page" : undefined}>
              <div className={styles.itemContainer}>
                <svg className={styles.arrowSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                {isLast ? (
                  <span className={styles.currentPage}>{name}</span>
                ) : (
                  <a href={routeTo} className={styles.link}>{name}</a>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
export default Breadcrumbs