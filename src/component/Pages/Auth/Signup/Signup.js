import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';

const Signup = () => {
    const { createUser } = useContext(AuthProvider);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
        form.reset();

    }
    return (
        <div className='bg-blue-3 h-100 py-32'>
            <h2 className='text-5xl font-bold text-white mb-4 text-center'>Register</h2>
            <div className='mx-auto w-80'>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Name" name='name' className="border rounded-sm p-2 w-full max-w-xs mb-3" />
                    <br />
                    <input type="email" placeholder="Email" name='email' className="border rounded-sm p-2 w-full max-w-xs mb-3" />
                    <br />
                    <input type="password" placeholder="Password" name='password' className="border rounded-sm p-2 w-full max-w-xs mb-3" />
                    <br />
                    <p className='text-white'><small>Already have an account? <span className='text-red-3'><Link to='/login'>Login</Link></span></small></p>
                    <button type='submit' className='text-white font-bold py-2 px-5 bg-red-2 rounded-sm'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;