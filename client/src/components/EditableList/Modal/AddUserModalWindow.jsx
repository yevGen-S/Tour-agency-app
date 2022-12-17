import { Autocomplete, Modal, TextField } from '@mui/material';
import { registration, updateUser } from '../../../http/userApi';
import UserStore from '../../../store/UserStore';
import ModalInput from './ModalInput';

import React, { useState } from 'react';

const ModalWindow = ({ isModalOpen, setModalOpen, modalName }) => {
    const handleClose = () => {
        setModalOpen(false);
    };
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [phonenumberInput, setPhonenumberInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [tourSubscrInput, setTourSubscrInput] = useState(false);

    const handleCreateUser = async () => {
        try {
            if (
                !(
                    loginInput === '' ||
                    passwordInput === '' ||
                    nameInput === '' ||
                    surnameInput === '' ||
                    phonenumberInput === '' ||
                    emailInput === ''
                )
            ) {
                const response = await registration(
                    loginInput,
                    passwordInput,
                    nameInput,
                    surnameInput,
                    phonenumberInput,
                    emailInput,
                    tourSubscrInput
                );
            } else {
                alert('Some fields are empty');
            }
        } catch (e) {
            alert(`Can't register acount: ${e}`);
        }
    };

    return (
        <Modal
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <div
                id='editUserModal'
                tabIndex={-1}
                aria-hidden='true'
                className='flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full'
            >
                <div className='relative w-full max-w-2xl h-full md:h-auto'>
                    {/* <!-- Modal content --> */}
                    <form className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        {/* <!-- Modal header --> */}
                        <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                                {modalName}
                            </h3>

                            {CloseButton(handleClose)}
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className='p-6 space-y-6 first-line:'>
                            <div className='grid grid-cols-3 gap-6'>
                                {/* INSERT HERE */}

                                <form>
                                    {/* <!-- LOgin input --> */}
                                    <div className='mb-6'>
                                        <input
                                            type='text'
                                            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            id='exampleFormControlInput2'
                                            placeholder='Login'
                                            onChange={(
                                                e
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
                                                e
                                            ) =>
                                                setPasswordInput(e.target.value)
                                            }
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
                                                e
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
                                                e
                                            ) =>
                                                setSurnameInput(e.target.value)
                                            }
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
                                                e
                                            ) =>
                                                setPhonenumberInput(
                                                    e.target.value
                                                )
                                            }
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
                                                e
                                            ) => setEmailInput(e.target.value)}
                                        />
                                    </div>

                                    <div className='flex justify-between items-center mb-6'>
                                        <div className='form-group form-check'>
                                            <input
                                                type='checkbox'
                                                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                                                id='exampleCheck2'
                                                onChange={(e) =>
                                                    setTourSubscrInput(
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </div>
                                        Subscription to receive tours on mail.
                                    </div>

                                    <div className='text-center lg:text-left'>
                                        <button
                                            type='button'
                                            className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                                            onClick={handleCreateUser}
                                        >
                                            ADD USER
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                            <button
                                type={'button'}
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                Save all
                            </button>
                            <button
                                type={'button'}
                                onClick={handleClose}
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ModalWindow;

const CloseButton = (handleClose) => {
    return (
        <button
            type='button'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-toggle='editUserModal'
            onClick={handleClose}
        >
            <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                ></path>
            </svg>
        </button>
    );
};
