import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';
import { FaGooglePlusSquare } from 'react-icons/fa';




const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthProvider);
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
        form.reset();
        navigate('/')
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => console.log(res))
            .catch(error => console.error(error))
        navigate('/')
    }
    return (
        <div className='bg-blue-3 h-100 py-32'>
            <h2 className='text-5xl font-bold text-white mb-4 text-center'>Login</h2>
            <div className='mx-auto w-80'>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" name='email' className="border rounded-sm p-2 w-full max-w-xs mb-3" />
                    <br />
                    <input type="password" placeholder="Password" name='password' className="border rounded-sm p-2 w-full max-w-xs mb-3" />
                    <br />
                    <p className='text-white'><small>New user? <span className='text-red-3'><Link to='/login'>Register</Link></span></small></p>
                    <button type='submit' className='text-white font-bold py-2 px-8 bg-red-2 rounded-sm'>Login</button>
                </form>
                <h4 className='text-2xl font-bold text-white mb-4 text-center'>OR</h4>
                <button
                    onClick={handleGoogleLogin}
                    className='flex items-center text-white text-2xl py-2 px-3 border rounded-sm mx-auto'>
                    Login with Google
                    <FaGooglePlusSquare />
                </button>
            </div>
        </div>
    );
};

export default Login;