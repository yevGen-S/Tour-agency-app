import React from 'react';

const ModalInput = ({
    inputType,
    isRequired,
    inputName,
    inputPlaceholder,
    inputValue,
    onChangeSet,
}) => {
    return (
        <div className='col-span-6 sm:col-span-3'>
            <label
                htmlFor='first-name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
                {`${inputName}${isRequired ? '*' : ''}`}
            </label>
            <input
                type={inputType}
                name={inputName.toLocaleLowerCase().split(' ').join('-')}
                id={inputName.toLocaleLowerCase().split(' ').join('-')}
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder={inputPlaceholder}
                required={isRequired}
                value={inputValue || ''}
                onChange={(e) => onChangeSet(e.target.value)}
            />
        </div>
    );
};

export default ModalInput;
