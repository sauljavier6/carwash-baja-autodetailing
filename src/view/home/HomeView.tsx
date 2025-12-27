import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../../components/home/Home";
import Services from "../../components/services/Services";
import Process from "../../components/process/Process";
import Pricing from "../../components/pricing/Pricing";
import Carousel from "../../components/carrusel/Carrusel";
import Footer from "../../components/footer/Footer";

export default function HomeView() {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    
    return (
        <div>
            <div>
              <Home />
            </div>
            <div id="Services">
              <Services />
            </div>
            <div id="Process">
              <Process />
            </div>
            <div id="Pricing">
              <Pricing />
            </div>
            <div>
              <Carousel />
            </div>
            <div>
              <Footer />
            </div>
        </div>
    )   
}
