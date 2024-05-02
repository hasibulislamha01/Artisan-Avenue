import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Authentication/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from  'prop-types'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    
    // console.log(children)
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    console.log(auth)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state change',currentUser)
            if(currentUser){
                setUser(currentUser)
                setLoading(false);
            }
            else{
                setUser(null)
                setLoading(null);
            }
        } )
    }, [user])

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = ( email, password ) => {
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password);
    }

    const updateUserProfile = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const loginWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    

    const data = {
        registerUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
        loginWithGithub,
        updateUserProfile,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;