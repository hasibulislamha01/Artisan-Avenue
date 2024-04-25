import { Link, NavLink } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";


const Navbar = () => {
    return (
        <div className="w-full bg-[#005C97] bg-opacity-70 sticky bg-blur">
            <nav className="navbar">
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
                    <a className="btn btn-ghost text-xl"> <span>Trust</span><span>Travel</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold w-full flex justify-evenly">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-[#A0A0A0]'}>Home</NavLink>
                        <NavLink to='/allSpots' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-gray-400'}>See Spots</NavLink>
                        <NavLink to='/addSpot' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-gray-400'}>Add Spots</NavLink>
                        <NavLink to='/myList' className={({ isActive }) => isActive ? 'text-[#FFD662]' : 'text-gray-400'}>Your Spots</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="text-5xl text-warning"><IoIosLogIn /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/login' className="p-2 text-xl text-center hover:text-warning hover:bg-[#005C97] rounded-xl">Login</Link>
                            <Link to='/register' className="p-2 text-xl text-center hover:text-warning hover:bg-[#005C97] rounded-xl">Register</Link>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;