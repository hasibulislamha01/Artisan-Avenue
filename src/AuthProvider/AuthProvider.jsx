import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Authentication/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    
    // console.log(children)
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state change',currentUser)
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        } )
    }, [user])

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = ( email, password ) => {
        return signInWithEmailAndPassword( auth, email, password);
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    const loginWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }


    const logoutUser = () => {
        return signOut(auth)
    }
    

    const data = {
        registerUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
        updateUserProfile,
        user,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;