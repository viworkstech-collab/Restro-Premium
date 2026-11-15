import React, { useState, useEffect  } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,  setScrolled]= useState(false)

   useEffect(()=>{
    const handleScroll =()=>{
      setScrolled(window.scrollY >  10);
    };
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll)
   },[])

  return (
    <>
      <nav className={`fixed top-0 z-20 px-4 w-full transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]' :'bg-transprent' }`}>

        <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">

          {/* Logo */}
          <a href="/">
            <img src="/logo.svg" alt="Restaurant Logo" className="w-[122px] h-auto object-contain" />
          </a>

          {/* Desktop Navlinks */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="hover:text-zinc-600 hover:border-b-2 border-gray-500">
                {link.name}
              </a>
            ))}
          </div>

          {/* Booking Button */}
          <a href="#booking-process"
            className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full transition">
            Book a table
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden bg-zinc-800 text-white p-2 rounded-md">
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-10 md:hidden flex flex-col items-center justify-center p-8 bg-white/70 backdrop-blur-md transition-transform duration-300 ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>

        <div className="flex flex-col items-center space-y-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition">
              {link.name}
            </a>
          ))}

          <a
            href="#booking-process"
            onClick={() => setMobileOpen(false)}
            className="bg-orange-600 text-white px-6 py-3 rounded-full">
            Book a table
          </a>
        </div>

      </div>
    </>
  )
}

export default Navbar
