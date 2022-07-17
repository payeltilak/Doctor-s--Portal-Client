import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="sideDrawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-3xl font-bold text-purple-500'> Welcome to DashBoard </h2>
                    <Outlet />
                    {/* <label for="sideDrawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div class="drawer-side">
                    <label for="sideDrawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>DashBoard</Link></li>
                        <li><Link to='/dashboard/review'>Review</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};
export default DashBoard;