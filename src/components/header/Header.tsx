import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <img src={'/logo/bajalogo.jpg'} alt="" />
        </div>
        <nav className={styles.container__content__navbar}>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/#Services">SERVICIOS</Link></li>
            <li><Link to="/#Process">PROCESO</Link></li>
            <li><Link to="/#Pricing">PRECIOS</Link></li>
          </ul>
        </nav>
        <div className={styles.container__content__userOptions}>
        <a href="tel:+526644082505">
          <button>
            Contáctanos <img src="/icon/phone-call.png" alt="phone" />
          </button>
        </a>
        </div>
      </div>
    </header>
  );
};
