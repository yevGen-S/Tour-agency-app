import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTour, fetchTourPoints } from '../../http/tourApi';
import TourStore from '../../store/TourStore';
import ServiceImages from '../Service/constants';
import { v4 as uuid } from 'uuid';

const styleTourDescription = `
    text-[20px]
    underlined 
`;

export const Tour = observer(() => {
    const { id } = useParams();

    useEffect(() => {
        fetchTour(id).then((data) => {
            TourStore.setSelected(data[0]);
        });

        fetchTourPoints(id).then((data) => {
            TourStore.setSelectedTourPoints(data);
        });
    }, [id]);

    const handleBookTour = async () => {};

    return (
        <div className='flex justify-center relative h-screen w-screen'>
            <img
                src={TourStore.selectedTourImage}
                alt='Tour'
                className='w-full relative'
            />
            <Container
                maxWidth='md'
                color='#fff'
                className='items-center justify-center absolute top-[500px] bottom-0 '
            >
                <div className='md:text-[20px] bg-black text-white w-full h-full flex-col '>
                    <h1 className='text-bold font-mono text-[50px] p-5'>
                        Tour: {TourStore?.selectedTour?.Tour_name}
                    </h1>

                    <div className='p-8'>
                        <h3 className={styleTourDescription}>
                            Price: {TourStore?.selectedTour?.price}
                        </h3>
                        <h3 className={styleTourDescription}>
                            City: {TourStore?.selectedTour?.City_name}
                        </h3>
                        <h3 className={styleTourDescription}>
                            Number of places:{' '}
                            {TourStore?.selectedTour?.number_of_places}
                        </h3>
                        <h3 className={styleTourDescription}>
                            <div className='flex items-center '>
                                <svg
                                    aria-hidden='true'
                                    className='w-5 h-5 text-yellow-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <title>Rating star</title>
                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                                </svg>
                                <p className={styleTourDescription}>
                                    {TourStore?.selectedTour?.rating}
                                </p>
                                <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
                                <a href='#' className={styleTourDescription}>
                                    Number of reviews
                                </a>
                            </div>
                        </h3>
                        <button
                            onClick={handleBookTour}
                            className='text-white border m-3 p-3 border-white hover:bg-slate-300 hover:text-slate-800 '
                        >
                            {' '}
                            BOOK TOUR{' '}
                        </button>
                    </div>
                </div>
                <div className='  w-full pt-[80px] columns-1'>
                    <h1 className='text-bold font-mono text-[45px]'>
                        Tour points
                    </h1>

                    {TourStore?.selectedTourPoints?.map((service: any) => {
                        return (
                            <>
                                <div key={uuid()} className='flex flex-row p-3'>
                                    <img
                                        key={uuid()}
                                        src={ServiceImages.getRandImage(
                                            service.day,
                                            service.Service_type
                                        )}
                                        alt='service'
                                        className='max-w-[450px]'
                                    />
                                    <div key={uuid()} className='p-10'>
                                        <h1 className='text-bold text-[50px] font-sans'>
                                            Day: {service?.day}
                                        </h1>
                                        <h1 className='text-bold text-[20px] font-sans'>
                                            {' '}
                                            {service?.Service_type}
                                        </h1>
                                        <h1 className='pt-10'>
                                            {' '}
                                            {service?.description}
                                        </h1>
                                    </div>
                                </div>
                                <div className='h-[3px] bg-slate-300 my-5' />
                            </>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
});
