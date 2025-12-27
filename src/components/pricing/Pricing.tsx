import { useEffect, useRef, useState } from 'react';
import styles from './Pricing.module.scss';

export default function Pricing() {
    const carouselRef = useRef(null);
    const cards = [
      { id: 1, title: 'Pulido de faros', pricing: '$250.00', desc: 'Restauración y mejora de la claridad de un par de faros.' },
      { id: 2, title: 'Encerado de carrocería', pricing: '$300.00', desc: 'Aplicación de cera para proteger y dar brillo a la pintura del vehículo.' },
      { id: 3, title: 'Corrección de pintura sedán', pricing: '$1800.00', desc: 'Eliminación de imperfecciones y restauración del brillo de la pintura en sedanes.' },
      { id: 4, title: 'Corrección de pintura camioneta', pricing: '$2100.00', desc: 'Proceso de pulido y corrección para mejorar la apariencia de la pintura en camionetas.' },
      { id: 5, title: 'Aplicación de cerámico', pricing: 'Precio a tratar', desc: 'El precio dependerá del estado del vehículo.' },
      { id: 6, title: 'Limpieza de tapicería sedán', pricing: '$800.00', desc: 'Lavado profundo de la tapicería para eliminar manchas y olores en sedanes.' },
      { id: 7, title: 'Limpieza de tapicería camioneta', pricing: '$1000.00', desc: 'Limpieza especializada de la tapicería para camionetas, eliminando suciedad y olores.' },
      { id: 8, title: 'Lavado completo sedán', pricing: '$350.00', desc: 'Lavado exterior e interior detallado para sedanes, dejando el vehículo impecable.' },
      { id: 9, title: 'Lavado completo camioneta', pricing: '$420.00', desc: 'Lavado integral de la camioneta, incluyendo interiores y exteriores.' }
    ];

  

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
  
    useEffect(() => {
      const updateVisibleCards = () => {
        if (window.innerWidth <= 767) {
          setVisibleCards(1);
        } else if (window.innerWidth <= 1023) {
          setVisibleCards(2);
        }
      };
  
      updateVisibleCards();
      window.addEventListener('resize', updateVisibleCards);
  
      return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);
  
    const goToPrevious = () => {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setStartIndex((prevIndex) =>
        prevIndex + visibleCards >= cards.length ? 0 : prevIndex + 1
      );
    };
  

    return (
        <div className={styles.container}>
            
            <div ref={carouselRef} className={styles.container__content}>
                {cards.slice(startIndex, startIndex + visibleCards).map((card) => (
                    <div key={card.id} className={styles.container__content__mini_card}>
                        <h1>{card.title}</h1>
                        <h2>{card.pricing}</h2>
                        <p>{card.desc}</p>
                        <button
                          onClick={() =>
                            window.open(
                              `https://wa.me/526644082505?text=Hola,%20quiero%20agendar%20el%20servicio%20de%20${card.title}`,
                              "_blank"
                            )
                          }
                        >
                          Reservar
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.container__content_desc}>
                <h1>Precios</h1>
                <p>En carwash Baja Autodetailing, ofrecemos una variedad de servicios diseñados para dejar tu vehículo impecable, con la mejor calidad y al mejor precio. 
                   Desde un lavado rápido hasta una limpieza profunda, contamos con opciones que se ajustan a tus necesidades.
                </p>
                <div>
                    <button onClick={goToPrevious} className={styles.container__content__leftArrow}>⬅</button>
                    <button onClick={goToNext} className={styles.container__content__rightArrow}>➡</button>
                </div>
            </div>
        </div>
    );
}
