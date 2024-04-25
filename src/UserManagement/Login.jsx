import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { FaFacebook, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const userData = new FormData(e.currentTarget) 
        console.log(userData)
        const email = userData.get('email');
        const password = userData.get('password')
        console.log(email, password)
    }

    const handleGoogleLogin = () => {
        console.log('logging in with google')
    }

    const handleFacebookLogin = () => {
        console.log('logging in with facebook')
    }
     // toggle show password
     const [showPassword, setShowpassword] = useState(false);
     const togglePasswordView = () => {
         setShowpassword(!showPassword);
     }
    return (
        <div>
            <h1>Plese login</h1>
            <div>
                <Helmet>
                    <title>DreamDwell | Login</title>
                </Helmet>
                <div className="px-2 md:w-1/2 lg:w-[35%] mx-auto mt-12 space-y-8">
                    {
                        location?.state ?
                            <div>
                                <p className="text-amber-500 text-center text-xl animate__animated animate__bounceIn animate__delay-0.5s">You have to Login first to proceed</p>
                            </div>
                            : <></>
                    }
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input
                                type="email"
                                name="email"
                                className="grow"
                                placeholder="Email"
                                required
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="grow"
                                placeholder="Password"
                                required
                            />
                            <span onClick={togglePasswordView}>
                                {
                                    showPassword ? <FaRegEyeSlash></FaRegEyeSlash>
                                        : <FaRegEye></FaRegEye>
                                }
                            </span>

                        </label>

                        <button
                            type="submit"
                            className="w-full btn text-blue-700">
                            Login
                            <Toaster></Toaster>
                        </button>

                    </form>

                    <div className="space-y-4 text-center">
                        <button
                            onClick={handleGoogleLogin}
                            className="md:w-full lg:w-1/2 mx-auto h-12 rounded-md bg-blue-500 flex gap-3 md:gap-5 items-center shadow-lg hover:scale-105">
                            <span className="bg-white pl-4 h-full w-[46px] flex items-center rounded-l-md" > <FcGoogle /></span>

                            <span className="text-white text-sm text-center px-3">Login With Google</span>
                            <Toaster></Toaster>
                        </button>
                        <button
                            onClick={handleFacebookLogin}
                            className="md:w-full lg:w-1/2 mx-auto h-12 rounded-md bg-blue-400 flex gap-3 md:gap-5 items-center shadow-lg hover:scale-105">
                            <span className="bg-white rounded-l-md pl-4 h-full w-[46px] flex items-center text-blue-500" > <FaFacebook></FaFacebook> </span>
                            <span className="text-white text-sm text-center pr-3">Login With Facebook</span>
                            <Toaster></Toaster>
                        </button>
                        <p>Do not have an account? <Link to='/register' className="text-amber-500 ml-4">Register</Link></p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login; <h1>Plese login</h1>