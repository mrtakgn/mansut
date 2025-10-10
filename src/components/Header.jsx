import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import mansutLogo from '../assets/mansut.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Dark mode from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-mode', savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-sticky-wrap">
      <div className="logo-bar">
        <img src={mansutLogo} alt="Mansüt Gıda Logo" className="logo-img" />
        <span className="logo-text">Mansüt Gıda</span>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end onClick={closeMenu}>Anasayfa</NavLink>
        <NavLink to="/hakkimizda" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Hakkımızda</NavLink>
        <NavLink to="/urunlerimiz" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Ürünlerimiz</NavLink>
        <NavLink to="/bayiliklerimiz" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Bayiliklerimiz</NavLink>
        <NavLink to="/iletisim" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>İletişim</NavLink>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Header;

