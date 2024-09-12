import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-[#0d9cea] to-[#0c8cd3]' : 'bg-transparent'
    }`}>
      <div className="py-5 flex flex-row justify-between items-center w-[90%] md:w-[80%] mx-auto">
        <img
          src="./imgs/logo_markably.png"
          className="w-[120px] md:w-[150px] h-auto"
          alt="logo_markably"
        />
        <div className="hidden md:flex overflow-hidden">
          <a className="text-normal capitalize font-poppins text-white p-[15px]" href="#Home">
            Home
          </a>
          <a className="text-normal capitalize font-poppins text-white p-[15px]" href="#Features">
            Features
          </a>
          <a className="text-normal capitalize font-poppins text-white p-[15px]" href="#Pricing">
            Pricing
          </a>
          <a className="text-normal capitalize font-poppins text-white p-[15px]" href="#Download">
            Download
          </a>
          <a className="text-normal capitalize font-poppins text-white p-[15px]" href="#Contact">
            Contact
          </a>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#0d9cea] to-[#0c8cd3]">
          <a className="block text-normal capitalize font-poppins text-white p-[15px]" href="#">
            Home
          </a>
          <a className="block text-normal capitalize font-poppins text-white p-[15px]" href="#">
            Features
          </a>
          <a className="block text-normal capitalize font-poppins text-white p-[15px]" href="#">
            Pricing
          </a>
          <a className="block text-normal capitalize font-poppins text-white p-[15px]" href="#">
            Download
          </a>
          <a className="block text-normal capitalize font-poppins text-white p-[15px]" href="#">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;