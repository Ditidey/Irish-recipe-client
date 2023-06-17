import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { registerUser, updateUser } = useContext(contextProvider);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
// register page
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photo.value;
        if (password.length < 6) {
            setError('Must have 6 characters or more');
            return;
        }

        registerUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                updateUser(name, photoURL)
                .then(()=>{})
                .catch(error=>{
                    setError(error.message)
                    console.log(error)
                })
                // console.log(registeredUser)
            
                navigate('/')
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className='my-10'>
            <div className='w-2/5 shadow-2xl mx-auto p-10 ps-40 space-y-3 bg-orange-50'>
                <p className='text-2xl font-bold'>Register with</p>
                <p className='text-red-500 text-2xl font-semibold'>{error}</p>
                <p className='text-green-500 text-2xl font-semibold'>{success}</p>

                <form onSubmit={handleRegister}  >
                    <div>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="name" className='border p-2 my-2' required />
                    </div>
                    <div>
                        <label htmlFor="photo">Photo URL</label> <br />
                        <input type="text" name="photo" id="photo" className='border p-2 mb-2' required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="email" className='border p-2' required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" className='border p-2' required />
                    </div>
                    <input type="submit" value="Register" className=' border bg-green-300 hover:bg-green-700 p-2 rounded-lg w-52 mt-3' /> <br />
                </form> 
                <br />
                <Link to='/login' className='hover:text-blue-500 mt-3'>Already register? Login</Link>
            </div>
        </div>
    );
};

export default Register;