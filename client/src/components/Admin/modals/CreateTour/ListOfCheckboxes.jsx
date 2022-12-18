import React from 'react';
import { v4 as uuid } from 'uuid';

export const ListOfCheckboxes = ({ listName, list, toggleCheckBox }) => {
    return (
        <div>
            <h1 className='text-[20px] p-5 font-bold'>{listName}</h1>
            <ul className='flex w-full justify-center flex-col text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                {list.map((element) => {
                    return (
                        <li
                            key={uuid()}
                            className='w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600'
                        >
                            <div className='flex items-center p-3 ml-10 rind hover:rind-blue-700 hover:shadow-blue-500'>
                                <input
                                    id={uuid()}
                                    type='checkbox'
                                    value=''
                                    className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                                    onClick={(e) => console.log(element)}
                                />
                                <label className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
                                    {element.Service_type}, {element.city},{' '}
                                    {element.price}
                                </label>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
