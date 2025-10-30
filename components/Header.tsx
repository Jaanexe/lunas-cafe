
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onAboutClick: () => void;
  onMenuClick: () => void;
  onGalleryClick: () => void;
  onTestimonialsClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick, onMenuClick, onGalleryClick, onTestimonialsClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'About', handler: onAboutClick },
    { label: 'Menu', handler: onMenuClick },
    { label: 'Gallery', handler: onGalleryClick },
    { label: 'Testimonials', handler: onTestimonialsClick },
    { label: 'Contact', handler: onContactClick },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-coffee-dark cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Luna’s Café
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
             <button key={link.label} onClick={link.handler} className="text-text-main hover:text-coffee-dark font-semibold transition-colors duration-300">{link.label}</button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-coffee-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-cream shadow-lg">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
                <button key={link.label} onClick={() => { link.handler(); setIsMenuOpen(false); }} className="py-2 text-text-main hover:text-coffee-dark font-semibold transition-colors duration-300">{link.label}</button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
