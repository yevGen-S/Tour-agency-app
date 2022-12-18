import React, { ChangeEvent, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_PATH, REGISTRATION_PATH, TOURS_PATH } from '../../utils/consts';
import { login } from '../../http/userApi';
import UserStore from '../../store/UserStore';
import { v4 as uuid } from 'uuid';

const travelAgency = require('../../assets/images/travel-agency-auth-pic.png');

export const Login = () => {
    const [loginInput, setLoginInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');

    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_PATH;

    const handleLoginOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginInput(e.target.value);
    };

    const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value);
    };

    const handleSingIn = async () => {
        try {
            if (isLogin) {
                const response = await login(loginInput, passwordInput);

                UserStore.setIsAuth(true);
                UserStore.setUser(response);
                navigate(TOURS_PATH);
            }
        } catch (e: any) {
            alert(e.response.data.message);
        }
    };

    return (
        <section className='h-screen'>
            <div className='px-6 h-full text-gray-800'>
                <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
                    <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
                        <img
                            src={travelAgency}
                            className='w-full'
                            alt='Auth pic'
                        />
                    </div>
                    <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
                        <form>
                            {/* <!-- Email input --> */}
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id={uuid()}
                                    placeholder='Email address'
                                    onChange={handleLoginOnChange}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className='mb-6'>
                                <input
                                    type='password'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id={uuid()}
                                    placeholder='Password'
                                    onChange={handlePasswordOnChange}
                                />
                            </div>

                            <div className='flex justify-between items-center mb-6'>
                                <div className='form-group form-check'>
                                    <input
                                        type='checkbox'
                                        className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                                        id={uuid()}
                                    />
                                </div>
                                <a href='#!' className='text-gray-800'>
                                    Forgot password?
                                </a>
                            </div>

                            <div className='text-center lg:text-left'>
                                <button
                                    type='button'
                                    className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                                    onClick={handleSingIn}
                                >
                                    Login
                                </button>
                                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                                    Don't have an account?
                                    <NavLink
                                        to={REGISTRATION_PATH}
                                        className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                                    >
                                        Register
                                    </NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
