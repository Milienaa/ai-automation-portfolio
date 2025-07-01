
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#workflows", label: "Workflows" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  
  const NavLinks: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
      <div className={isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-6 lg:space-x-8'}>
          {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${isMobile ? 'py-2 text-lg' : 'font-medium'}`}
              >
                {item.label}
              </a>
          ))}
      </div>
  );

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 nav-blur shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#hero" className="font-bold text-xl text-slate-800">AI Engineer</a>
            
            <NavLinks />

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="p-5 flex flex-col">
            <button onClick={() => setIsOpen(false)} className="self-end text-slate-800 mb-8">
                <XIcon className="h-6 w-6" />
            </button>
            <NavLinks isMobile={true}/>
        </div>
      </div>
       {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/30 z-40 md:hidden"></div>}
    </>
  );
};

export default Navigation;
