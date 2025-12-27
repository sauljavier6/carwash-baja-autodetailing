import { useState } from "react";
import styles from './Hamburgermenu.module.scss';
import { Link } from 'react-router-dom';

export default function HamburgerMenu () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button 
        className={`${styles.hamburger} ${isOpen ? styles.open : styles.close}`} 
        onClick={toggleMenu}
      >
        <img
          src="/icon/more.png"
          alt="menu"
        />
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>INICIO</Link>
          </li>
          <li>
            <Link to="/#Services" onClick={closeMenu}>SERVICIOS</Link>
          </li>
          <li>
            <Link to="/#Process" onClick={closeMenu}>PROCESO</Link>
          </li>
          <li>
            <Link to="/#Pricing" onClick={closeMenu}>PRECIOS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
