import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../useAdmin';

const DashBoard = () => {
    const user=useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="sideDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-3xl font-bold text-purple-500'> Welcome to DashBoard </h2>
                    <Outlet />
                    {/* <label htmlFor="sideDrawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="sideDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='/dashboard/review'>Review</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>
                       <li><Link to='/dashboard/users'>All users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};
export default DashBoard;