import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UserStore from '../store/UserStore';
import { LOGIN_PATH } from '../utils/consts';

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
`;

const signUpStyle = `
    text-xl block ml-[50px]
    text-cyan-50
    md:hover:text-[#000] 
    border-2 border-cyan-50
    md:hover:bg-cyan-50
    md:p-[5px]
`;

export const NavBar = observer(() => {
    const logOut = () => {
        UserStore.setIsAuth(false);
        UserStore.setUser({});
    };

    return (
        <nav className='bg-[#000] px-2 sm:px-4 py-2.5 rounded text-cyan-50 z-[999] sticky top-0 w-full'>
            <div className='container flex flex-wrap items-center justify-between m-auto'>
                <NavLink to='/' className='flex items-center'>
                    <span className='self-center text-[30px] font-semibold whitespace-nowrap dark:text-white'>
                        Tour agency
                    </span>
                </NavLink>

                <div
                    className='hidden w-full md:block md:w-auto'
                    id='navbar-default'
                >
                    <ul className='flex flex-row p-4 mt-4 border items-center  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
                        <li>
                            <NavLink
                                to='/tours'
                                className={navlinkStyle}
                                aria-current='page'
                            >
                                Destinations
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/aboutpage' className={navlinkStyle}>
                                About
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/services' className={navlinkStyle}>
                                Services
                            </NavLink>
                        </li>

                        {UserStore.isAuth &&
                            UserStore?.user?.role === 'admin' && (
                                <li>
                                    <NavLink
                                        to='/admin_page'
                                        className={navlinkStyle}
                                    >
                                        Admin panel
                                    </NavLink>
                                </li>
                            )}

                        {UserStore.isAuth &&
                            UserStore?.user?.role === 'client' && (
                                <li>
                                    <NavLink
                                        to='/tours/booked'
                                        className={navlinkStyle}
                                    >
                                        My tours
                                    </NavLink>
                                </li>
                            )}

                        {UserStore.isAuth &&
                            UserStore?.user?.role === 'service provider' && (
                                <li>
                                    <NavLink
                                        to='/servicepr'
                                        className={navlinkStyle}
                                    >
                                        My tours
                                    </NavLink>
                                </li>
                            )}

                        <li>
                            {UserStore.isAuth ? (
                                <NavLink
                                    to={LOGIN_PATH}
                                    className={signUpStyle}
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
