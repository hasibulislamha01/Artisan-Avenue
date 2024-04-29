import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Drawer from "./Drawer";


const Navbar = () => {
    const { user } = useContext(AuthContext)
    const userImage = user?.photoURL;
    const userName = user?.displayName
    console.log(user, userImage)


    return (
        <div className="w-full bg-gray-600 bg-opacity-75 sticky bg-blur">
            <Toaster></Toaster>
            <nav className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-lg font-semibold">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#A0A0A0]'}>Home</NavLink>
                            <NavLink to='/allSpots' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-gray-400'}>Browse Spots</NavLink>
                            <NavLink to='/addSpot' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-gray-400'}>Add Spots</NavLink>
                            <NavLink to='/myList' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-gray-400'}>Your Spots</NavLink>
                            <li className="text-lg">
                                <p className="text-lg">SignUp</p>
                                <ul className="p-2 flex flex-col">
                                    <Link className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#A0A0A0]'}>Login</Link>
                                    <Link className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#A0A0A0]'}>Register</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl text-[#FFD700]"> <span>Artisan</span><span>Avenue</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold w-full flex gap-6">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#CCCCCC]'}>Home</NavLink>
                        <NavLink to='/allSpots' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#CCCCCC]'}>Browse Spots</NavLink>
                        <NavLink to='/addSpot' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#CCCCCC]'}>Add Spots</NavLink>
                        <NavLink to='/myList' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#CCCCCC]'}>Your Spots</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-4">
                        <div>
                            {
                                user ?
                                    <div className="tooltip tooltip-bottom" data-tip={userName}>
                                        <img className="w-14 h-14 rounded-full z-50" src={userImage} alt="" />
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                        {/* drawer starts here */}
                        <Drawer></Drawer>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;