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

    const handleOnClick = (tourId: string, imageSrc: any) => {
        TourStore.setSelectedTourImage(imageSrc);
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
                <div className='grid grid-cols-2'>
                    {TourStore.tours.map((tour: any, index: any) => {
                        return (
                            <div
                                key={tour.id}
                                className='  text-black shadow-lg  rounded-xl p-2 m-5 shadow-slate-300'
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
                                        className='cursor-pointer max-h-[300px] max-w-lg hover:scale-[1.1] ease-in duration-[400ms]'
                                    />
                                </div>

                                <div className='justify-center items-center '>
                                    <h1 className='font-bold '>
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
