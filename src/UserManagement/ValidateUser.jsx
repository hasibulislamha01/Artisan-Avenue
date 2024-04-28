import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"

const ValidateUser = ({children}) => {
    
    const location = useLocation()
    console.log(location.pathname)

    const {user, loading} = useContext(AuthContext)
    console.log(user)

    if(user){
        return children;
    }

    else if(loading){
        return(
            <div className="mt-12 md:mt-20 flex justify-center items-center">
                <div className="w-40 mx-auto loading loading-spinner text-warning"></div>  
            </div>
        ) 
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