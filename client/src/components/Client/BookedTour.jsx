import React from 'react';

export const BookedTour = ({ tour }) => {
    const handleChangeOrderStatus = async (status) => {};
    
    return (
        <div className='shadow-sm shadow-gray-500 rounded-3xl p-3'>
            <h1 className='w-full flex font-sans text-[30px] '>Booked tour</h1>

            <div className='flex justify-between'>
                <div className='w-full flex flex-row border-r-2 border-gray-600'>
                    <div className='grid grid-cols-3'>
                        <div className=' m-3 text-[20px] font-extralight text-gray-900'>
                            Name{' '}
                            <h2 className='text-[15px] text-gray-700'>
                                {tour.name}
                            </h2>
                        </div>
                        <div className='m-3  text-[20px] font-extralight text-gray-900'>
                            Surname{' '}
                            <h2 className='text-[15px] text-gray-700'>
                                {tour.surname}
                            </h2>
                        </div>
                        <div className='m-3 text-[20px] font-extralight text-gray-900'>
                            Tour name{' '}
                            <h2 className='text-[15px] text-gray-700'>
                                {tour.tour}{' '}
                            </h2>
                        </div>
                        <div className='m-3 text-[20px] font-extralight  text-gray-900'>
                            City
                            <h2 className='text-[15px] text-gray-700'>
                                {tour.city}{' '}
                            </h2>
                        </div>
                        <div className='m-3 text-[20px] font-extralight  text-gray-900'>
                            Start date
                            <h2 className='text-[15px] text-gray-700'>
                                {tour.period_start.substring(0, 10)}{' '}
                            </h2>
                        </div>
                        <div className='m-3 text-[20px] font-extralight  text-gray-900'>
                            End date
                            <h2 className='text-[15px] text-gray-700'>
                                {tour.period_end.substring(0, 10)}{' '}
                            </h2>
                        </div>

                        <div className='m-3 text-[20px] font-extralight  text-gray-900'>
                            Order status
                            <h2 className='text-[18px] text-gray-700 font-extrabold'>
                                {tour.order_status}{' '}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <div className='m-3 w-[100px] text-[20px] font-extralight  text-gray-900'>
                        Finally price
                        <h2 className='text-[15px] text-gray-700'>
                            {tour.price}{' '}
                        </h2>
                    </div>
                    <button
                        type={'button'}
                        className='text-white m-3 max-h-[50px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        onClick={() => handleChangeOrderStatus('paid')}
                    >
                        Pay
                    </button>
                    <button
                        type={'button'}
                        className='text-white m-3 max-h-[50px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        onClick={() => handleChangeOrderStatus('canceled')}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
