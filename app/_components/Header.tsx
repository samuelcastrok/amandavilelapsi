'use client';

import Image from "next/image";
import NavigationList from "../config/NavigationList";
import logo from '../../public/images/logo.svg'
import { useState, useEffect } from "react";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    const handleHashChange = () => {
      console.log('hash changed');
      
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    handleHashChange(); 

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);


  return (    
    <header className="sticky inset-x-0 top-0 z-50 h-[84px] select-none bg-background-primary text-secondary-color">
      <nav className="flex items-center justify-between h-full g-8 relative" aria-label="Global">
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
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-secondary-color focus:ring-2 focus:bg-secondary-color focus:text-secondary-text-color focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
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
    </header>
  );
}