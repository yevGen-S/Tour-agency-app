import { Autocomplete, Modal, TextField } from '@mui/material';
import { updateUser } from '../../../http/userApi';
import UserStore from '../../../store/UserStore';
import ModalInput from './ModalInput';

import React from 'react';

const ModalWindow = ({ isModalOpen, setModalOpen, modalName }) => {
    const handleClose = () => {
        UserStore.setEditableUser({});
        setModalOpen(false);
    };

    const handleUpdateData = async () => {
        const form = document.getElementById('userListId');
        if (!form.checkValidity()) {
            const tmpSubmit = document.createElement('button');
            form.appendChild(tmpSubmit);
            tmpSubmit.click();
            form.removeChild(tmpSubmit);
        } else {
            updateUser(UserStore.editUser)
                .then((response) => {
                    console.log(response);
                })
                .catch((e) => {
                    alert(e);
                });
        }
    };

    const handleChangeName = (e) => {
        UserStore.editUser.name = e.target.value;
    };
    const handleChangeSurname = (e) => {
        UserStore.editUser.surname = e.target.value;
    };
    const handleChangeLogin = (e) => {
        UserStore.editUser.login = e.target.value;
    };
    const handleChangePhone = (e) => {
        UserStore.editUser.telephone_number = e.target.value;
    };
    const handleChangeEmail = (e) => {
        UserStore.editUser.email = e.target.value;
    };
    const handleChangeRole = (value) => {
        UserStore.editUser.role = value;
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
                <div className='relative w-full min-2-xl max-w-2xl h-full md:h-auto'>
                    {/* <!-- Modal content --> */}
                    <form
                        id='userListId'
                        className='relative w-full bg-white rounded-lg shadow dark:bg-gray-700'
                    >
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
                                <ModalInput
                                    inputName={'Name'}
                                    inputPlaceholder={UserStore.editUser.name}
                                    inputType={'text'}
                                    isRequired={true}
                                    changeInput={handleChangeName}
                                    inputValue={UserStore.editUser.name}
                                />

                                <ModalInput
                                    inputName={'Surname'}
                                    inputPlaceholder={
                                        UserStore.editUser.surname
                                    }
                                    inputType={'surname'}
                                    isRequired={true}
                                    changeInput={handleChangeSurname}
                                    inputValue={UserStore.editUser.surname}
                                />

                                <ModalInput
                                    inputName={'Phone number'}
                                    inputPlaceholder={
                                        UserStore.editUser.telephone_number
                                    }
                                    inputType={'Phone number'}
                                    isRequired={true}
                                    changeInput={handleChangePhone}
                                    inputValue={
                                        UserStore.editUser.telephone_number
                                    }
                                />

                                <ModalInput
                                    inputName={'Login'}
                                    inputPlaceholder={UserStore.editUser.login}
                                    inputType={'Login'}
                                    isRequired={true}
                                    inputValue={UserStore.editUser.login}
                                    changeInput={handleChangeLogin}
                                />

                                <ModalInput
                                    inputName={'Email'}
                                    inputPlaceholder={UserStore.editUser.email}
                                    inputType={'email'}
                                    isRequired={true}
                                    inputValue={UserStore.editUser.email}
                                    changeInput={handleChangeEmail}
                                />

                                <Autocomplete
                                    disablePortal
                                    id='Role'
                                    options={[
                                        { label: 'admin' },
                                        { label: 'client' },
                                        { label: 'service provider' },
                                    ]}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder={
                                                UserStore.editUser.role
                                            }
                                        />
                                    )}
                                    onChange={(e, value) =>
                                        handleChangeRole(value.label)
                                    }
                                />
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                            <button
                                type='button'
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                onClick={handleUpdateData}
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
