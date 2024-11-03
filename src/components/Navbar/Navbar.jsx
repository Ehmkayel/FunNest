import { useState, useEffect } from "react"
import Button from "../Reusable/Button"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")


  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id"))
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <main className="flex justify-between items-center border bg-white fixed top-0 left-0 z-50 p-4 px-4 lg:px-[3rem] xl:px-[5rem] shadow w-full">
      <div className="container flex items-center justify-between max-w-[1440px] w-full mx-auto">
        {/* Logo */}
        <div className="logo">
          <a href="/" className="heading font-bold text-primary text-2xl cursor-pointer">
            Fun<span className="text-secondary">Nest</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="menu-links hidden lg:flex space-x-8 items-center text-base font-medium text-primary heading">
          <a href="#about" className={activeSection === "about" ? "active-link" : ""}>About</a>
          <a href="#events" className={activeSection === "events" ? "active-link" : ""}>Events</a>
          <a href="#gallery" className={activeSection === "gallery" ? "active-link" : ""}>Gallery</a>
          <a href="#features" className={activeSection === "faq" ? "active-link" : ""}>Features</a>
          <a href="#footer" className={activeSection === "contact" ? "active-link" : ""}>Contact</a>
          <Button link="/community-prompt">Community</Button>
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="flex items-center lg:hidden">
          <button id="mobile-menu-button" className="focus:outline-none" onClick={toggleMobileNav}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-nav" className={`lg:hidden font-medium text-primary heading mobile-nav-container ${isMobileNavOpen ? "open" : ""}`}>
          <div className="mobile-nav-overlay"></div>
          <div className="mobile-nav-menu">
            {/* Mobile Close Icon */}
            <button className="close-button" onClick={toggleMobileNav}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Mobile Menu Links */}
            <a href="#about" className="block" onClick={toggleMobileNav}>About</a>
            <a href="#events" className="block" onClick={toggleMobileNav}>Events</a>
            <a href="#gallery" className="block" onClick={toggleMobileNav}>Gallery</a>
            <a href="#features" className="block" onClick={toggleMobileNav}>Features</a>
            <a href="#footer" className="block" onClick={toggleMobileNav}>Contact</a>
            <NavLink to="/community-prompt" onClick={toggleMobileNav} className="bg-secondary border border-primary hover:bg-primary hover:text-secondary px-4 py-2 flex justify-center items-center rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Community</NavLink>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Navbar
