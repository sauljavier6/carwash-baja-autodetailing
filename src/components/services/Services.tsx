import styles from './Services.module.scss';

export default function Services() {

    const cardsData = [
        {
          id: 1,
          title: 'Lavado Premium',
          description: 'Limpieza profunda interior y exterior con productos especializados.',
        },
        {
          id: 2,
          title: 'Pulido y Encerado',
          description: 'Eliminación de imperfecciones y brillo espejo.',
        },
        {
          id: 3,
          title: 'Detalle Interior',
          description: 'Limpieza profunda interior y exterior con productos especializados.',
        },
      ]; 

  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container__content_left}>
            <div className={styles.container__content_left__box}>
                <h1>Servicios</h1>
                <p>Carwash Baja Autodetailing, ofrecemos un servicio profesional de estética automotriz para que tu vehículo luzca como nuevo. 
                    Nos especializamos en el cuidado, protección y embellecimiento de tu auto con técnicas y productos de la más alta calidad.
                </p>
            </div> 
          </div>
          <div className={styles.container__content_rigth}>
          {cardsData.map((card) => (
            <div key={card.id} className={styles.container__content_rigth__mini_card}>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
            </div>
           ))}
          </div>
        </div>
    </div>
  );
}
