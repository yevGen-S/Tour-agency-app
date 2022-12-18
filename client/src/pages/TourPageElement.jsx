import React from 'react';

export const TourPageElement = ({ TourList, clickHandler, images }) => {
    return TourList.map((tour, index) => {
        return (
            <div
                key={tour.id}
                className='  text-black shadow-lg  rounded-xl m-5 shadow-slate-150 hover:shadow-slate-500'
            >
                <div className='overflow-hidden'>
                    <img
                        src={images[index % 4]}
                        alt='Tour'
                        onClick={() => clickHandler(tour.id, images[index % 4])}
                        className='cursor-pointer max-w-[600px] hover:scale-[1.1] ease-in duration-[150ms]'
                    />
                </div>

                <div className='justify-center items-center p-5'>
                    <h1 className='font-bold font-[ui-monospace] text-[30px]'>
                        {tour.Tour_name}
                    </h1>
                    <h2 className=''>Price: {tour.price}</h2>
                    <h2 className=''>City: {tour.City_name}</h2>
                    <h2 className=''>
                        Number of places: {tour.number_of_places}
                    </h2>
                    <h2 className=''> Rating {tour.rating} </h2>
                    <h2 className=''>
                        From {tour.period_start.substring(0, 10)} to{' '}
                        {tour.period_end.substring(0, 10)}
                    </h2>
                </div>
            </div>
        );
    });
};
