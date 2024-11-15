import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar.jsx";
import { CartProvider } from "../Contexts/CartContextProvider.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import { ToastContainer } from "react-toastify";



const Root = () => {
    return (
        <div className="container mx-auto">
            <HelmetProvider>
                <CartProvider>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </CartProvider>
                <ToastContainer/>
            </HelmetProvider>
        </div>
    );
};

export default Root;