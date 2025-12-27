import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import HamburgerMenu from "../components/hamburgermenu/Hambuergermenu";
import { useEffect, useState } from "react";
import styles from './AppLayout.module.scss';

export default function AppLayout() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 768);
    const [isHamburgemenuVisible, setIsHamburgemenuVisible] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.innerWidth >= 768;
            setIsSidebarVisible(isLargeScreen);
            setIsHamburgemenuVisible(!isLargeScreen);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.applayout}>
            {isSidebarVisible && (
                <>
                    <Header />
                </>
            )}
            {isHamburgemenuVisible && (
                <>
                    <HamburgerMenu />
                </>
            )}
            <main className={styles.applayout__main}>
                <Outlet />
            </main>
            <footer className={styles.applayout__footer}>
                {/*<Footer />*/}   
            </footer>
        </div>
    );
}