import { Outlet } from "react-router-dom";
import Navbar from "../pages/homeComp/Navbar";


const MainLayout = () => {
    return (
        <div className="roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;