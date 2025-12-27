import styles from './Process.module.scss';

export default function Process() {

    const cardsImg = [
        {
          id: 1,
          img: '/process/process1.jpg',
          desc: 'Enjabonar'
        },
        {
          id: 2,
          img: '/process/process2.jpg',
          desc: 'Tallar'
        },
        {
          id: 3,
          img: '/process/process3.jpg',
          desc: 'Enjuagar'
        },
        {
          id: 4,
          img: '/process/process4.jpg',
          desc: 'Secar'
        },
      ]; 
    
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container__content}>
            <h1>Proceso</h1>
            <div className={styles.container__content__box}>
            {cardsImg.map((data) => (
                <div key={data.id} className={styles.container__content__box__box_content}>
                    <h1>{data.id}</h1>
                    <img src={data.img} alt={data.desc} />
                </div>
            ))}
            </div>
          </div>
        </div>
    </div>
  );
}
