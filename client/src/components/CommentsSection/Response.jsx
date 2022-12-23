import React from 'react';

export const Response = ({ name, surname, login, text, date }) => {
    return (
        <article className='p-6 mb-6 ml-6 lg:ml-12 text-base bg-gray-50  rounded-lg dark:bg-gray-900'>
            <footer className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                    <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                        {login}: {name} {surname}
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        <time dateTime={date} title='February 12th, 2022'>
                            {date}
                        </time>
                    </p>
                </div>
                <button
                    id='dropdownComment2Button'
                    data-dropdown-toggle='dropdownComment2'
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
                    id='dropdownComment2'
                    className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
                >
                    <ul
                        className='py-1 text-sm text-gray-700 dark:text-gray-200'
                        aria-labelledby='dropdownMenuIconHorizontalButton'
                    >
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Edit
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Remove
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Report
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            <p className='text-gray-500 dark:text-gray-400'>{text}</p>
            <div className='flex items-center mt-4 space-x-4'></div>
        </article>
    );
};
