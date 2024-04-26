import { Link, NavLink } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const userImage = user?.photoURL;
    const userName = user?.displayName
    console.log(user, userImage)

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('logged out'))
            .catch((error) => {
                console.error(error.message)
            })
    }
    return (
        <div className="w-full bg-[#005C97] bg-opacity-75 sticky bg-blur">
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
                    <Link className="btn btn-ghost text-xl text-[#FFD700]"> <span>Trust</span><span>Travel</span></Link>
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
                    {/* drawer starts here */}
                    <div className="drawer">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button"><IoIosLogIn /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                {
                                    ! user ?
                                        <div className="flex flex-col">
                                            <Link to='/login' className="p-2 text-xl font-semibold text-center hover:text-warning hover:bg-[#005C97] hover:bg-opacity-90 rounded-xl">Login</Link>
                                            <Link to='/register' className="p-2 text-xl text-center font-semibold hover:text-warning hover:bg-[#005C97] rounded-xl">Register</Link>
                                        </div>
                                        :
                                        <div>
                                            <button className="btn" onClick={handleLogout}>Logout</button>
                                        </div>
                                }
                            </ul>
                        </div>
                    </div>
                    {/* drawer ends here */}
                    {/* <div className="drawer drawer-side"> */}

                    {/* </div> */}
                    {/* {
                        user ?
                            <div className="flex gap-4">
                                <div className="z-30">
                                    <img className="rounded-full w-12" src={userImage} alt="" />
                                </div>

                            </div>
                            :
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="text-5xl text-warning"></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to='/login' className="p-2 text-xl font-semibold text-center hover:text-warning hover:bg-[#005C97] hover:bg-opacity-90 rounded-xl">Login</Link>
                                    <Link to='/register' className="p-2 text-xl text-center font-semibold hover:text-warning hover:bg-[#005C97] rounded-xl">Register</Link>

                                </ul>
                            </div>

                    } */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;