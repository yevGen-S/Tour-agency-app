import React from 'react';
import TourStore from '../store/TourStore';

const SearchInput = ({ searchHandler }) => {
    return (
        <div className='flex w-full justify-center '>
            <div className='bg-black w-1/2  h-[150px] items-center  justify-items-center'>
                <label htmlFor='table-search' className='sr-only'>
                    Search
                </label>
                <div className='relative flex justify-around items-center  justify-items-center h-full'>
                    <div className='md:visible invisble md:text-[30px] md:font-nano md:text-gray-200'>
                        {' '}
                        Find tour:{' '}
                    </div>
                    <input
                        type='text'
                        id='table-search-users'
                        className='text-bold block p-5 pl-10 w-80 text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Find tour'
                        onChange={searchHandler}
                        defaultValue={TourStore.searchInput}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
