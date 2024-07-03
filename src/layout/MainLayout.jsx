import { Outlet } from "react-router-dom";
import Navbar from "../pages/homeComp/Navbar";


const MainLayout = () => {
    return (
        <div className="roboto">
            <div className="fixed z-30 w-full">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;