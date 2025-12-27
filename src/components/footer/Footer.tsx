import styles from './Footer.module.scss';

export default function Footer()  {
  return (
    <footer className={styles.footer}>
    <div  className={styles.footer__content}>
      <div className={styles.footer__content__logo}><img src="/logo/bajalogo.jpg" alt="" /></div>
      <div><a href="tel:+526644082505">Telefono: 664-408-2505</a></div>
      <div className={styles.footer__content__icons}>
        <a href="https://www.facebook.com/share/1UP1qs4Khb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <img src="/icon/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <img src="/icon/tiktok.png" alt="TikTok" />
        </a>
        <a href="https://www.instagram.com/bajaautodetailing?igsh=MWppNGpmOXFoMW5uZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src="/icon/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
    <div className={styles.footer__copy}>
    <p>© 2025 <a href="https://souls-web-solutions.netlify.app/" target="_blank" rel="noopener noreferrer">Souls Web Solutions</a>. All rights reserved.</p>
    </div>
  </footer>
  );
};
 