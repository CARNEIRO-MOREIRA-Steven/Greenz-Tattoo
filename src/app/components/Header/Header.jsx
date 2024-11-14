"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="desktop-nav">
        <Link href='/' className={activePath === '/' ? 'active' : ''}>Greenz Ink Tattoo</Link>
        <Link href='/a_propos' className={activePath === '/a_propos' ? 'active' : ''}>Tatoueuse</Link>
        <img className="logo-header" src="./logo.png" alt="Logo" />
        <Link href='/services' className={activePath === '/services' ? 'active' : ''}>Soins Tatouage</Link>
        <Link href='/temoignages' className={activePath === '/temoignages' ? 'active' : ''}>FAQ</Link>
        <Link href='/contact' className={activePath === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
      <div className="mobile-menu">
      <img className="logo-header" src="./logo.png" alt="Logo" />
        <div id="menuToggle">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}>Greenz Ink Tattoo</Link></li>
            <li><Link href='/tatoueuse' className={activePath === '/a_propos' ? 'active' : ''}>Tatoueuse</Link></li>
            <li><Link href='/soins' className={activePath === '/services' ? 'active' : ''}>Soins Tatouage</Link></li>
            {/* <li><Link href='/projets' className={activePath === '/projets' ? 'active' : ''}>Projets</Link></li> */}
            <li><Link href='/faq' className={activePath === '/temoignages' ? 'active' : ''}>FAQ</Link></li>
            <li><Link href='/contact' className={activePath === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </div>
      </div>
      </header>
  );
};


export default Header;
