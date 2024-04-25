import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className="container mx-auto"></Outlet>
        </div>
    );
};

export default Root;