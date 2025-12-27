import { useEffect, useRef, useState } from 'react';
import styles from './Carrusel.module.scss';

export default function Carrusel() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(12);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const cards = [
        { id: 1, img: '/carrusel/Carrusel1.jpeg' },
        { id: 2, img: '/carrusel/Carrusel2.jpeg' },
        { id: 3, img: '/carrusel/Carrusel3.jpeg' },
        { id: 4, img: '/carrusel/Carrusel4.jpeg' },
        { id: 5, img: '/carrusel/Carrusel5.jpeg' },
        { id: 6, img: '/carrusel/Carrusel6.jpeg' },
        { id: 7, img: '/carrusel/Carrusel7.jpeg' },
    ];

    useEffect(() => {
      const updateVisibleCards = () => {
        if (window.innerWidth > 1024) {
          setVisibleCards(4);
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

    // Manejo del arrastre con mouse y touch
    const handleMouseDown = (event: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        setStartX(event.type === "touchstart" ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX);
    };

    const handleMouseMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;

        const currentX = event.type === "touchmove" ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX;
        const difference = currentX - startX;

        if (difference > 50) {
            goToPrevious();
            setIsDragging(false);
        } else if (difference < -50) {
            goToNext();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className={styles.container}>
            <div
                ref={carouselRef}
                className={styles.container__content}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                {cards.slice(startIndex, startIndex + visibleCards).map((card) => (
                    <div key={card.id} className={styles.container__content__mini_card}>
                        <img src={card.img} alt="img" />
                    </div>
                ))}
            </div>
            <div className={styles.container__content_desc}>
                <button onClick={goToPrevious}>⬅</button>
                <button onClick={goToNext}>➡</button>
            </div>
        </div>
    );
}
