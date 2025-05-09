'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from '../../public/images/logo.svg'
import NavigationList from "../config/NavigationList";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [activeHash, setActiveHash] = useState("#about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    handleHashChange(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange); 
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  }

  return (    
    <header className="sticky inset-x-0 top-0 p-2 z-50 h-[84px] select-none text-secondary-color">
      <nav className={`flex items-center h-full justify-between rounded-lg g-8 relative ${
        scrolled
          ? "bg-navbar-soft shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.1)]  backdrop-blur"
          : "bg-transparent"
      }`} aria-label="Global">
        <Image className="h-full max-w-[200px] px-4" src={logo} alt="Logo"/>
        <div className="hidden px-4 sm:flex">
          {
            NavigationList.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.href === activeHash ? 'page' : undefined}
                className={classNames(
                  item.href === activeHash ? 'bg-[#e6d6be] text-primary-color border-b-primary-color' : 'bg-transparent border-b-transparent',
                  'px-3 py-2 text-l font-semibold border-b-2 hover:text-primary-color hover:bg-[#E6D6BE] hover:border-b-primary-color'
                )}
              >
                {item.name}
              </a>
            ))
          }
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-secondary-color focus:ring-2 focus:bg-secondary-color focus:text-secondary-text-color focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu}>
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
            
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[84px] left-0 w-full bg-background-primary text-secondary-color z-40 flex flex-col items-center gap-4 py-4"
          >
            <nav className="flex flex-col items-center gap-4">
              {NavigationList.map((item) => (                
                <a
                key={item.name}
                href={item.href}
                aria-current={item.href === activeHash ? 'page' : undefined}
                className={classNames(
                  item.href === activeHash ? 'bg-[#e6d6be] text-primary-color border-b-primary-color' : 'bg-transparent border-b-transparent',
                  'px-3 py-2 text-l font-semibold border-b-2 hover:text-primary-color hover:bg-[#E6D6BE] hover:border-b-primary-color'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
              ))}
            </nav>            
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}