import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container__content_left}>
            <div className={styles.container__content_left__box}>
                <h1>CARWASH BAJA AUTODETAILING</h1>
                <p>Expertos en el detallado automotriz</p>
                <button onClick={() => window.open("https://wa.me/526644082505?text=Hola,%20quiero%20más%20información", "_blank")}>Contactanos <img src="/icon/whatsapp.png" alt="phone" /></button>
                <div>
                    <a href="https://www.facebook.com/share/1UP1qs4Khb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <img src="/icon/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/bajaautodetailing?igsh=MWppNGpmOXFoMW5uZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img src="/icon/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/icon/tiktok.png" alt="TikTok" />
                    </a>
                </div>
            </div> 
          </div>
          <div className={styles.container__content_rigth}>
            <img src="/img/BMW.png" alt="Descripción" />
          </div>
        </div>
    </div>
  );
}
