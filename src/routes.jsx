import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainPage from "./pages/mainPage";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={mainPage} path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;