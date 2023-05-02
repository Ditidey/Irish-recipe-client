import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
     const location = useLocation();
    //  console.log(location);

    if(loading){
        return <div className='w-20 h-20 rounded-full animate-pulse bg-green-100'>
            <p className='animate-spin w-10 h-10 rounded-full'>__....__</p>
            <p className='text-orange-700 '>Loading..</p>
        </div>
    }

    if(user){
        return children;
    }
    return (
    <Navigate state={{from: location}} to='/login' replace></Navigate>
    );
};

export default ProtectedRoute;