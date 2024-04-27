import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"

const ValidateUser = ({children}) => {
    
    const location = useLocation()
    console.log(location.pathname)

    const {user} = useContext(AuthContext)
    console.log(user)

    if(user){
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