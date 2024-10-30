import { useState } from "react"
import Button from "../Reusable/Button"
import AnchorLink from "react-anchor-link-smooth-scroll"
// import { assets } from "../../assets/assets"

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const toggleMobileNav= () =>{
        setIsMobileNavOpen(!isMobileNavOpen)
    }

  return (
    <main className='flex justify-between items-center border bg-white fixed top-0 left-0 z-50 p-4 px-4 lg:px-[3rem] xl:px-[5rem] shadow w-full'>
      <div className="container flex items-center justify-between max-w-[1440px] w-full mx-auto">
            {/* logo */}
        <div className='logo'>
            <img src="" alt="FunNest Logo " className="h-8 cursor-pointer"
            href="/"/>
        </div>
        {/* desktop navigation */}
        <nav className='menu-links hidden lg:flex space-x-8 items-center text-base font-medium text-primary heading'>
            <AnchorLink href="#about" className="block">About</AnchorLink>
            <AnchorLink href="#events" className="block">Events</AnchorLink>
            <AnchorLink href="#gallery" className="block">Gallery</AnchorLink>
            <AnchorLink href="#faq" className="block">FAQ</AnchorLink>
            <AnchorLink href="#contact" className="block">Contact</AnchorLink>
            <Button link="/"> Community </Button>
          
        </nav>
        {/* Mobile navigation button */}
        <div className="flex items-center lg:hidden ">
          <button
            id="mobile-menu-button"
            className="focus:outline-none"
            onClick={toggleMobileNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

        </div>
        {/* Mobile Navigation Menu */}
        <div id="mobile-nav" className={`lg:hidden mobile-nav-container ${isMobileNavOpen ? "open" : ""}`}>
            <div className="mobile-nav-overlay"></div>
            <div className="mobile-nav-menu">
                {/* mobile close icon */}
                <button className="close-button" onClick={toggleMobileNav}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                {/* Mobile menu navigation */}
                <AnchorLink href="#services" className="block">About</AnchorLink>
                <AnchorLink href="#gallery" className="block">Events</AnchorLink>
                <AnchorLink href="#reviews" className="block">Gallery</AnchorLink>
                <AnchorLink href="#reviews" className="block">FAQ</AnchorLink>
                <AnchorLink href="#contact" className="block">Contact</AnchorLink>
              
            </div>
        </div>
        
        </div>
    </main>
  )
}

export default Navbar