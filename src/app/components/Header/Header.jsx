"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);  // Ferme le menu
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Définit la position en haut de la page
    });}

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
        <Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Greenz Ink Tattoo</Link>
        <Link href='/#tatoueuse' className={activePath === '#tatoueuse' ? 'active' : ''}onClick={closeMenu}>Tatoueuse</Link>
        <Link href="/">
        <img className="logo-header" src="./logo.png" alt="Logo"/>
        </Link>
        <Link href='/soins' className={activePath === '/soins' ? 'active' : ''}onClick={closeMenu}>Soins Tatouage</Link>
        {/* <Link href='/faq' className={activePath === '/faq' ? 'active' : ''}onClick={closeMenu}>FAQ</Link> */}
        <Link href='/#contact' className={activePath === '#contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link>
      </nav>
      <div className="mobile-menu">
      <Link className='logo_link_header' href="/">
        <img className="logo-header" src="./logo.png" alt="Logo"/>
        </Link>
        <div id="menuToggle">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Greenz Ink Tattoo</Link></li>
            <li><Link href='#tatoueuse' className={activePath === '#tatoueuse' ? 'active' : ''}onClick={closeMenu}>Tatoueuse</Link></li>
            <li><Link href='/soins' className={activePath === '/soins' ? 'active' : ''}onClick={closeMenu}>Soins Tatouage</Link></li>
            {/* <li><Link href='/projets' className={activePath === '/projets' ? 'active' : ''}onClick={closeMenu}>Projets</Link></li> */}
            {/* <li><Link href='/faq' className={activePath === '/faq' ? 'active' : ''}onClick={closeMenu}>FAQ</Link></li> */}
            <li><Link href='#contact' className={activePath === '#contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
      <img className='arrow_up' src='arrow-up.svg' onClick={scrollToTop}></img>
      </header>
  );
};


export default Header;
