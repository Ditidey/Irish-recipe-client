import React, { useContext, useState } from 'react';
import { FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser, loginWithGit, loginWithGoogle } = useContext(contextProvider);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        setError('')

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Your login successful!')
                navigate(from, {replace:true})
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleGithub = () => {
        loginWithGit()
            .then(result => {
                const gitUser = result.user
                console.log(gitUser)
                setError('')
                setSuccess('Login successful with Github!')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogle = ()=>{
        loginWithGoogle()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser)
            setError('')
            setSuccess('Login with Google Successful')
        })
        .catch(error => {
            setSuccess('')
            setError(error.message)
        })
    }
    return (
        <div className='my-10'>
            <div className='w-2/5 shadow-2xl mx-auto p-10 ps-40   bg-orange-50'>
                <p className='text-2xl font-bold mb-6 ms-4'>Login with</p>
                <p className='text-red-500'>{error}</p>
                <p className='text-green-500'>{success}</p>

                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="email" className='border p-2' required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" className='border p-2' required />
                    </div>
                    <input type="submit" value="Login" className='border bg-green-300 hover:bg-green-700 p-2 rounded-lg w-48 mt-2' /> <br />
                </form>

                <button onClick={handleGoogle} className='bg-blue-400 p-2 w-52 inline-flex mt-5'>
                    <FaGoogle className='text-green-300  h-5 p-1 w-4 mt-1 me-1 bg-white'></FaGoogle>
                    Login with Google
                </button> <br />
                <button onClick={handleGithub} className=' p-2 w-52 inline-flex my-4 border-spacing-2 border-black bg-slate-300'>
                    <FaGithub className='text-black p-1 h-5 w-5 font-bold mt-1 me-1'></FaGithub>
                    Login with GitHub
                </button> <br />
                <Link to='/register' className='hover:text-blue-500 mt-3'>Don't have an account? Register</Link>
            </div>
        </div>
    );
};

export default Login;