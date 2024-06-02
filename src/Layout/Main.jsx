import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";
import { ToastContainer } from "react-toastify";


const Main = () => {
    return (
        <div>
               <ToastContainer />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;