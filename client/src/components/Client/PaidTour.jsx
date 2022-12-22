import React from 'react';

export const PaidTour = ({ tour }) => {
    return (
        <div className='shadow-sm shadow-gray-500 rounded-3xl p-3'>
            <h1 className='w-full flex font-sans text-[30px] '>Paid tour</h1>

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
                </div>
            </div>
        </div>
    );
};
