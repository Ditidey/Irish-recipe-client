import { Tooltip } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { FaBars, FaClosedCaptioning, FaGlassCheers, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../AuthProvider';
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const { user, logoutUser } = useContext(contextProvider)

    // console.log(user)
    const handleLogout = () => {
        logoutUser()
            .then()
            .catch()
    }
    return (
        <>
            <nav className='flex justify-between mx-20'>
                <p className='inline-flex font-bold text-3xl'>
                    <FaGlassCheers className='text-green-600 mt-1 me-2 hover:animate-spin'></FaGlassCheers>
                    <span className='text-orange-600'>Irish </span>
                     <span className='text-green-700'> Brunch</span>
                </p>
                {
                    open ? <FaTimes onClick={() => setOpen(!open)} className='lg:hidden'></FaTimes>
                        : <FaBars onClick={() => setOpen(!open)} className='lg:hidden'></FaBars>
                }

                <div className={`md:flex md:space-x-8 md:static mt-3  absolute duration-500 ${open === true ? 'top-14' : '-top-48'}`}>
                    <p>  <NavLink to='/' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Home</NavLink></p>
                    <p> <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Blog</NavLink></p>
                    <p> <NavLink   className={({ isActive }) => isActive ? 'text-black' : ''}>About Us</NavLink></p>
                     
                </div>
                <div className='flex'>
                    {
                        user ? <>
                            <Tooltip content={user?.displayName}>
                                {user?.photoURL ? <img src={user.photoURL} className='w-8 h-8 rounded-full me-2'></img>
                                    : <FaUserCircle className='inline-flex h-8 w-8 space-x-2' ></FaUserCircle>
                                }
                            </Tooltip>
                            <NavLink className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>
                                <button onClick={handleLogout} className='border-spacing-1 shadow-md px-2 py-1 rounded-md hover:bg-slate-400'>Logout</button></NavLink>
                        </> :
                            <><NavLink to='/login' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>
                                <button className='border-spacing-1 shadow-md px-2 py-1 rounded-md hover:bg-slate-400'>Login</button></NavLink>
                            </>
                    }
                </div>
            </nav>
        </>
    );
};

export default NavBar;