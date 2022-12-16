import { CircularProgress, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTours } from '../http/tourApi';
import TourStore from '../store/TourStore';

const ourToursPic = require('../assets/dark-main.jpeg');

const tour1 = require('../assets/images/baloons.jpg');
const tour2 = require('../assets/images/baloons2.jpg');
const tour3 = require('../assets/images/view.webp');
const tour4 = require('../assets/images/travel.webp');
const images = [tour1, tour2, tour3, tour4];

export const ToursPage = observer(() => {
    useEffect(() => {
        if (TourStore.tours.length === 0) {
            fetchTours().then((data) => {
                TourStore.setTours(data);
            });
        }
    }, []);

    const navigate = useNavigate();

    const handleOnClick = (tourId: string, imageSrc: any) => {
        TourStore.setSelectedTourImage(imageSrc);
        navigate(`/tour/${tourId}`);
    };

    return (
        <>
            <img src={ourToursPic} alt='Our tours' className='w-screen' />
            <Container
                maxWidth='lg'
                color='#e0c0dd'
                className='items-center justify-center h-screen'
            >
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    {TourStore.tours.map((tour: any, index: any) => {
                        return (
                            <div
                                key={tour.id}
                                className='  text-black shadow-lg  rounded-xl m-5 shadow-slate-150 hover:shadow-slate-500'
                            >
                                <div className='overflow-hidden'>
                                    <img
                                        src={images[index % 4]}
                                        alt='Tour'
                                        onClick={() =>
                                            handleOnClick(
                                                tour.id,
                                                images[index % 4]
                                            )
                                        }
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
                                        Number of places:{' '}
                                        {tour.number_of_places}
                                    </h2>
                                    <h2 className=''> Rating {tour.rating} </h2>
                                    <h2 className=''>
                                        From{' '}
                                        {tour.period_start.substring(0, 10)} to{' '}
                                        {tour.period_end.substring(0, 10)}
                                    </h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    );
});
