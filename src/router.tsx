import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Layouts
import AppLayout from "./layouts/AppLayout";

//Vistas
import HomeView from "./view/home/HomeView";
import NotFoundView from "./view/notfound/NotFoundView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas dentro del layout general */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomeView />} />
                    {/* Ruta para manejar 404 */}
                    <Route path="*" element={<NotFoundView />} />
                </Route>
            </Routes>
            <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
        </BrowserRouter>
    );
}
