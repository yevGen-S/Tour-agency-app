import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { fetchResponsesByServiceId, postResponse } from '../../http/serviceApi';
import ServiceStore from '../../store/ServiceStore';
import UserStore from '../../store/UserStore';
import ResponseModal from './ResponseModal';

export const Feedback = ({
    name,
    surname,
    login,
    text,
    date,
    rating,
    feedback_id,
}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handlePostResponse = async (text, feedback_id) => {
        postResponse(text, UserStore.user.login, feedback_id)
            .then((data) => {
                console.log(data);
                fetchResponsesByServiceId(ServiceStore.selectedService.id).then(
                    (data) => {
                        ServiceStore.setResponses(data.data);
                    }
                );
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <article className='p-6 mb-6 text-base bg-gray-150 rounded-lg dark:bg-gray-900 border '>
            <Rating name='simple-controlled' defaultValue={rating} readOnly />
            <footer className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                    <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                        {login}: {name} {surname}
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        <time dateTime={date} title='February 8th, 2022'>
                            {date}
                        </time>
                    </p>
                </div>
                <button
                    id='dropdownComment1Button'
                    data-dropdown-toggle='dropdownComment1'
                    className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    type='button'
                >
                    <svg
                        className='w-5 h-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                    </svg>
                    <span className='sr-only'>Comment settings</span>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                    id='dropdownComment3'
                    className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
                >
                    <ul
                        className='py-1 text-sm text-gray-700 dark:text-gray-200'
                        aria-labelledby='dropdownMenuIconHorizontalButton'
                    >
                        <li>
                            <button className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                Edit
                            </button>
                        </li>
                        <li>
                            <button className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                Remove
                            </button>
                        </li>
                        <li>
                            <button className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                Report
                            </button>
                        </li>
                    </ul>
                </div>
            </footer>
            <p className='text-gray-500 dark:text-gray-400'>{text}</p>
            <div className='flex items-center mt-4 space-x-4'>
                <button
                    type='button'
                    className='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400'
                    onClick={() => setModalOpen(true)}
                >
                    <svg
                        aria-hidden='true'
                        className='mr-1 w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                        ></path>
                    </svg>
                    Reply
                </button>
            </div>
            <ResponseModal
                id={feedback_id}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                handlePost={handlePostResponse}
                text={text}
                feedback_id={feedback_id}
            />
        </article>
    );
};
