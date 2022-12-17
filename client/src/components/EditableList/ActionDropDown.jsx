import React, { useState } from 'react';

const ActionDropDown = () => {
    const [action, isAction] = useState(true);

    const handleOpen = () => {

    }
    return (
        <div>
            <button
                id='dropdownActionButton'
                data-dropdown-toggle='dropdownAction'
                className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                onClick={(e) => isAction(!action)}
            >
                <span className='sr-only'>Action button</span>
                Action
                <svg
                    className='ml-2 w-3 h-3'
                    aria-hidden='true'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                    ></path>
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
                id='dropdownAction'
                className=' z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute'
                hidden={action}
            >
                <button className='w-full block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Delete User
                </button>
                <button className='w-full block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Edit
                </button>
                
                <button 
                    onClick={handleOpen}
                    className='w-full block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Add user
                </button>
            </div>
        </div>
    );
};

export default ActionDropDown;
