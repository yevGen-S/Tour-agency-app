import { Modal } from '@mui/material';
import React, { useState } from 'react';

export const ResponseModal = ({
    isModalOpen,
    setModalOpen,
    handlePost,
    feedback_id,
}) => {
    const [text, setText] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    };
    const handleClose = () => {
        setModalOpen(false);
    };
    const handleResponse = async () => {
        if (!!text) {
            await handlePost(text, feedback_id);
        } else {
            alert('Input text');
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
                <div className='relative w-full min-2-xl max-w-2xl h-full md:h-auto'>
                    {/* <!-- Modal content --> */}

                    <form
                        id='userListId'
                        className='relative w-full bg-white rounded-lg shadow dark:bg-gray-700'
                    >
                        {/* <!-- Modal header --> */}
                        <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                            {CloseButton(handleClose)}
                        </div>
                        {/* <!-- Modal body --> */}

                        <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                            <label label='comment' className='sr-only'>
                                Your response
                            </label>
                            <textarea
                                id='comment'
                                rows='6'
                                className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
                                placeholder='Write a response...'
                                onChange={handleOnChange}
                                required
                            ></textarea>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                            <button
                                type={'button'}
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                onClick={handleResponse}
                            >
                                Post
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

export default ResponseModal;

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
