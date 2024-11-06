import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { FaCalendarAlt, FaBell, FaCommentDots, FaSearch, FaSignOutAlt, FaFileAlt, FaStar } from 'react-icons/fa'
import { FaUsersRectangle } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

export const SideBarData = [
  { title: 'Events', icon: <FaCalendarAlt />, href: '/dashboard/events' },
  { title: 'Explore Events', icon: <FaSearch />, href: '/dashboard/explore-events' },
  { title: 'Feedback & Review', icon: <FaCommentDots />, href: '/dashboard/feedback' },
  { title: 'Community', icon: <FaUsersRectangle />, href: '/dashboard/community' },
  { title: 'Recommendation', icon: <FaStar />, href: '/dashboard/recommendation' },
  { title: 'Safety Form', icon: <FaFileAlt />, href: '/dashboard/safety-form' },
  { title: 'Notifications', icon: <FaBell />, href: '/dashboard/notifications' },
  { title: 'Logout', icon: <FaSignOutAlt /> }
];


const Sidebar = () => {
  const location = useLocation()
  return (
    <section className="sidebar bg-gray-800 text-white h-screen w-20 lg:w-60 p-4">
      <div className='text-center'>
        <a href="/" className="heading font-bold text-primary text-2xl cursor-pointer mb-2">Fun<span className="text-secondary">Nest</span></a>
        <h2 className="text-2xl font-bold mb-6">Parent Dashboard</h2>
      </div>
    
      <nav className="space-y-2 flex-grow flex flex-col">
        {SideBarData.map((menu) => {
          const isActive = location.pathname === menu.href
          return(
            <Link key={menu.href} to={menu.href}>
              <motion.div
                className={`flex items-center space-x-2 cursor-pointer p-2 rounded transition-colors lg:space-x-3 py-2 px-4 mb-4 
                  ${isActive ? '' : 'hover:bg-secondary '}`}>
                    <span>{menu.icon}</span>
                    <AnimatePresence>
                      <motion.span
                        className="hidden lg:block whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {menu.title}
                      </motion.span>
                    </AnimatePresence>
              </motion.div>
            </Link>
          )
        })}
        
      </nav>
    </section>
  )
}

export default Sidebar