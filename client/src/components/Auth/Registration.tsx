import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { registration } from '../../http/userApi';
import { LOGIN_PATH, REGISTRATION_PATH } from '../../utils/consts';

const travelAgency = require('../../assets/images/travel-agency-auth-pic.png');

/**
 * Coponent represents form for registration in service
 * @component
 */
export const Registration = observer(() => {
    const [loginInput, setLoginInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [nameInput, setNameInput] = useState<string>('');
    const [surnameInput, setSurnameInput] = useState<string>('');
    const [phonenumberInput, setPhonenumberInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [tourSubscrInput, setTourSubscrInput] = useState<boolean>(false);

    const location = useLocation();
    const isRegistration = location.pathname === REGISTRATION_PATH;
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            if (
                isRegistration &&
                !(
                    loginInput === '' ||
                    passwordInput === '' ||
                    nameInput === '' ||
                    surnameInput === '' ||
                    phonenumberInput === '' ||
                    emailInput === ''
                )
            ) {
                const response: any = await registration(
                    loginInput,
                    passwordInput,
                    nameInput,
                    surnameInput,
                    phonenumberInput,
                    emailInput,
                    tourSubscrInput
                );

                localStorage.setItem('token', response.token);
                navigate(LOGIN_PATH);
            } else {
                alert('Some fields are empty');
            }
        } catch (e) {
            alert(`Can't register acount: ${e}`);
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
                            {/* <!-- LOgin input --> */}
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id='exampleFormControlInput2'
                                    placeholder='Login'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setLoginInput(e.target.value)}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className='mb-6'>
                                <input
                                    type='password'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id='exampleFormControlInput2'
                                    placeholder='Password'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setPasswordInput(e.target.value)}
                                />
                            </div>

                            {/* <!-- Name input --> */}
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id='exampleFormControlInput2'
                                    placeholder='Name'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setNameInput(e.target.value)}
                                />
                            </div>

                            {/* <!-- Second name input --> */}
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id='exampleFormControlInput2'
                                    placeholder='Second name'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setSurnameInput(e.target.value)}
                                />
                            </div>

                            {/* <!-- telephone_number input --> */}
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id='exampleFormControlInput2'
                                    placeholder='Telephone number'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setPhonenumberInput(e.target.value)}
                                />
                            </div>

                            {/* <!-- Email input --> */}
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    id='exampleFormControlInput2'
                                    placeholder='Email address'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setEmailInput(e.target.value)}
                                />
                            </div>

                            <div className='flex justify-between items-center mb-6'>
                                <div className='form-group form-check'>
                                    <input
                                        type='checkbox'
                                        className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                                        id='exampleCheck2'
                                        onChange={(e: any) =>
                                            setTourSubscrInput(e.target.checked)
                                        }
                                    />
                                </div>
                                Subscription to receive tours on mail.
                            </div>

                            <div className='text-center lg:text-left'>
                                <button
                                    type='button'
                                    className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                                    onClick={handleSignUp}
                                >
                                    Confirm registration
                                </button>
                                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                                    Don't have an account?
                                    <NavLink
                                        to={LOGIN_PATH}
                                        className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                                    >
                                        Login
                                    </NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});
