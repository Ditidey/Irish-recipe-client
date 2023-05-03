import React from 'react';
import error from '../../../public/img/error.jfif'
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const err = useRouteError();

    return (
        <div className='mx-20 my-20 text-center bg-slate-500 p-10'>
            <img className='w-2/5 ms-56 animate-pulse' src={error} alt="" />
            <h1 className='font-extrabold text-6xl mt-10 mb-8 text-red-500 animate-ping '>{err.status}</h1>
            <h3 className='font-bold text-3xl text-white mb-8'>{ err.statusText || err.message}</h3>

            <Link to='/' className='mb-3 px-10 py-2 font-bold text-3xl text-blue-600 bg-orange-100'>Back to Home Page</Link>
        </div>
    );
}

export default ErrorPage;