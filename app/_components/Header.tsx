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
      <nav className="flex items-center justify-between h-full g-8" aria-label="Global">
        <Image className="h-full max-w-[200px] px-4" src={logo} alt="Logo"/>
        <div className="flex px-4">
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
      </nav>
    </header>
  );
}