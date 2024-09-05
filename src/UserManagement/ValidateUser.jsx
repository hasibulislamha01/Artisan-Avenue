import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"

const ValidateUser = ({children}) => {
    
    const location = useLocation()
    console.log(location.pathname)

    const {user, loading} = useContext(AuthContext)
    console.log(user)

    if(loading){
        return (
            <div className="min-h-screen md:mt-20 flex justify-center items-center">
                <div className="w-40 mx-auto loading loading-spinner text-warning"></div>  
            </div>
        )
    }

    else if(user){
        return children;
    }

    
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

ValidateUser.propTypes={
    children: PropTypes.node
}

export default ValidateUser;