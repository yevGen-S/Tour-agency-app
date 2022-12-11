import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTours } from '../http/tourApi';
import TourStore from '../store/TourStore';

const ourToursPic = require('../assets/images/tours-page.webp');

const tour1 = require('../assets/images/baloons.jpg');
const tour2 = require('../assets/images/baloons2.jpg');
const tour3 = require('../assets/images/view.webp');
const tour4 = require('../assets/images/travel.webp');
const images = [tour1, tour2, tour3, tour4];

export const ToursPage = observer(() => {
    useEffect(() => {
        fetchTours().then((data) => {
            TourStore.setTours(data);
        });
    }, []);

    const navigate = useNavigate();

    const handleOnClick = (tourId: string) => {
        navigate(`/tour/${tourId}`);
    };

    return (
        <>
            <img src={ourToursPic} alt='Our tours' />

            <Container
                maxWidth='lg'
                color='#e0c0dd'
                className='items-center justify-center h-screen'
            >
                <div className=' columns-2'>
                    {TourStore.tours.map((tour: any) => {
                        return (
                            <div
                                key={tour.id}
                                className='text-black flex-col p-10'
                            >
                                <img
                                    src={
                                        images[
                                            Math.floor(
                                                Math.random() * images.length
                                            )
                                        ]
                                    }
                                    alt='Tour'
                                    onClick={() => handleOnClick(tour.id)}
                                    className='cursor-pointer'
                                />

                                <div className='justify-center items-center'>
                                    <h1 className='text-bold'>
                                        {tour.Tour_name}
                                    </h1>
                                    <h3>Price: {tour.price}</h3>
                                    <h3>City: {tour.City_name}</h3>
                                    <h3>
                                        Number of places:{' '}
                                        {tour.number_of_places}
                                    </h3>
                                    <h3> Rating {tour.rating} </h3>
                                    <h3>
                                        From{' '}
                                        {tour.period_start.substring(0, 10)} to{' '}
                                        {tour.period_end.substring(0, 10)}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    );
});
