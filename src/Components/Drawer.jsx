import { Drawer as SlidingMenu, Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Drawer = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('logged out'))
            .catch((error) => {
                console.error(error.message)
            })
    }

    return (
        <>
            <button className="text-warning text-5xl font-bold" onClick={() => { setOpen(true) }}>
                <IoIosLogIn></IoIosLogIn>
            </button>
            <SlidingMenu anchor="right" open={open} onClose={() => { setOpen(false) }}>
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant="h6" component='div'>
                        <div>
                            {
                                !user ?
                                    <div className="flex flex-col">
                                        <Link to='/login' className="p-2 text-xl font-semibold text-center hover:text-warning hover:bg-[#005C97] hover:bg-opacity-90 rounded-xl">Login</Link>
                                        <Link to='/register' className="p-2 text-xl text-center font-semibold hover:text-warning hover:bg-[#005C97] rounded-xl">Register</Link>
                                    </div>
                                    :
                                    <div>
                                        <button className="btn" onClick={handleLogout}>Logout</button>
                                    </div>
                            }
                        </div>
                    </Typography>
                </Box>
            </SlidingMenu>
        </>
    );
};

export default Drawer;

