import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
         <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        {/* <li><Link to='/review'>Review</Link></li> */}
        <li><Link to='/about'>About</Link></li>
        {/* <li><Link to='/contact'>Contact Us</Link></li> */}
        {
            user && <li><Link to='/dashboard'>DashBoard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
       
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {menuItems}
                            </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">DOCTORS PORTAL</a>
                </div>
                <div className="navbar-center hidden lg:flex font-bold">
                    <ul className="menu menu-horizontal p-0">
                 {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                 
                    <label htmlFor="sideDrawer" className="btn btn-primary drawer-button lg:hidden font-bold">Open drawer</label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;