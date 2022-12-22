import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ServiceStore from '../store/ServiceStore';
import TourStore from '../store/TourStore';
import UserStore from '../store/UserStore';
import { LOGIN_PATH, SERVICEP_PATH } from '../utils/consts';

const navlinkStyle = `
    text-xl font-bold
    block py-2 pl-3 pr-4 
    text-gray-400
    hover:bg-gray-100
    md:hover:bg-transparent
    md:hover:text-[#fff] 
    border-b-1 border-[#ecd02d] 
    md:hover:border-b-2 border-[#ecd02d] 
    md:p-0 dark:
    md:dark:hover:text-white dark:hover:bg-gray-700 
    dark:hover:text-white md:dark:hover:bg-transparent
    select-none
`;

const signUpStyle = `
    text-xl block ml-[50px]
    text-cyan-50
    md:hover:text-[#000] 
    border-2 border-cyan-50
    md:hover:bg-cyan-50
    md:p-[5px]
    select-none
`;

export const NavBar = observer(() => {
    const logOut = () => {
        UserStore.setIsAuth(false);
        UserStore.setUser({});
        localStorage.removeItem('token');
        TourStore.setBookedTours([]);
        TourStore.searchInput = '';
        ServiceStore.setServices([]);
    };

    return (
        <nav className='bg-[#000] px-2 sm:px-4 py-2.5 text-cyan-50 z-[999] sticky top-0 w-screen'>
            <div className='container flex flex-wrap items-center justify-between m-auto select-none'>
                <NavLink to='/' className='flex items-center' draggable={false}>
                    <span className='self-center text-[30px] font-semibold whitespace-nowrap dark:text-white'>
                        Tour agency
                    </span>
                </NavLink>

                <div
                    className='hidden w-full md:block md:w-auto'
                    id='navbar-default'
                >
                    <ul className='flex flex-row p-4 mt-4 border items-center  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
                        <li draggable={false}>
                            <NavLink
                                to='/tours'
                                className={navlinkStyle}
                                aria-current='page'
                                draggable={false}
                            >
                                Destinations
                            </NavLink>
                        </li>

                        <li draggable={false}>
                            <NavLink
                                to='/services'
                                className={navlinkStyle}
                                draggable={false}
                            >
                                Services
                            </NavLink>
                        </li>

                        {UserStore.isAuth &&
                            UserStore?.user?.role === 'admin' && (
                                <li>
                                    <NavLink
                                        to='/admin'
                                        className={navlinkStyle}
                                    >
                                        Admin panel
                                    </NavLink>
                                </li>
                            )}

                        {UserStore.isAuth &&
                            UserStore?.user?.role === 'client' && (
                                <li draggable={false}>
                                    <NavLink
                                        to={`/tours/booked/${UserStore.user.login}`}
                                        className={navlinkStyle}
                                        draggable={false}
                                    >
                                        My tours
                                    </NavLink>
                                </li>
                            )}

                        {UserStore.isAuth &&
                            UserStore?.user?.role === 'service provider' && (
                                <li draggable={false}>
                                    <NavLink
                                        to={SERVICEP_PATH}
                                        className={navlinkStyle}
                                        draggable={false}
                                    >
                                        Service Management
                                    </NavLink>
                                </li>
                            )}

                        <li draggable={false}>
                            {UserStore.isAuth ? (
                                <NavLink
                                    to={LOGIN_PATH}
                                    className={signUpStyle}
                                    draggable={false}
                                    onClick={logOut}
                                >
                                    Sign Out
                                </NavLink>
                            ) : (
                                <NavLink
                                    to={LOGIN_PATH}
                                    className={signUpStyle}
                                >
                                    Sign In
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});
