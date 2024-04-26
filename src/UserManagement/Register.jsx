import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
    const { registerUser, updateUserProfile, loginUser } = useContext(AuthContext)
    // console.log(registerUser)
    const [registerError, setRegisterError] = useState(null)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        setRegisterError(null)
        const form = new FormData(e.currentTarget);
        const userName = form.get('userName');
        const userPhoto = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(userName, userPhoto, email, password)

        // validation
        if (password.length < 6) {
            setRegisterError('Password must have at least 6 characters')
            return;
        }
        else if (! /[A-Z]/.test(password)) {
            setRegisterError("PassWord must have at least one uppercase letter")
            return;
        }
        else if (! /[a-z]/.test(password)) {
            setRegisterError("PassWord must contain at least one lowercase letter")
            return;
        }
        else {
            registerUser(email, password)
                .then((result) => {
                    console.log(result.user)
                    console.log('Successfull:', userName, userPhoto, email, password)
                    updateUserProfile(userName, userPhoto)
                    .then(()=> {
                        console.log('updating')
                    })
                    .catch((error)=> {
                        console.error('failed to update user',error.message)
                    })
                    loginUser(email, password)
                    navigate('/')
                    // location.reload()
                    toast.success('Registration Successful')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage)
                    setRegisterError(errorMessage)
                })
        }
    }

    useEffect(() => {
        if (registerError !== null) {
            console.log(registerError)
            toast.error(registerError)
        }
    }, [registerError])



    const [showPassword, setShowpassword] = useState(false)

    return (
        <div>
            <Toaster></Toaster>
            <Helmet>
                <title>TrustTravel | Register</title>
            </Helmet>
            <div className="w-full md:w-1/2 lg:w-[35%] mx-auto px-2 mt-12 space-y-8">
                <h1 className="text-3xl font-bold text-center">Please Register</h1>
                <form className="space-y-4" onSubmit={handleRegister}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="userName"
                            className="grow"
                            required
                            placeholder="Your Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="photo"
                            className="grow"
                            required
                            placeholder="Photo URL" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input
                            type="email"
                            name="email"
                            className="grow"
                            required
                            placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="grow"
                            required
                            placeholder="Password"
                        />
                        <span onClick={() => setShowpassword(!showPassword)}>
                            {
                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash>
                                    : <FaRegEye></FaRegEye>
                            }
                        </span>
                    </label>
                    <button
                        type="submit"
                        className="w-full btn text-blue-700">
                        Register
                        <Toaster></Toaster>
                    </button>
                </form>
                <div className="text-center">

                    <p>Already have an account? <Link to='/login' className="text-amber-600 ml-4">Login</Link></p>
                </div>


            </div>
        </div>
    );
};

export default Register;