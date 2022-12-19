import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTours } from '../http/tourApi';
import TourStore from '../store/TourStore';
import SearchInput from './SearchInput';
import { TourPageElement } from './TourPageElement';

const ourToursPic = require('../assets/dark-main.jpeg');

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

    const searchHandler = (e: any) => {
        TourStore.filterTours(e.target.value);
    };

    return (
        <>
            <img src={ourToursPic} alt='Our tours' className='w-screen' />
            <SearchInput searchHandler={searchHandler} />

            <Container
                maxWidth='lg'
                color='#e0c0dd'
                className='items-center justify-center h-screen'
            >
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    {TourStore.filteredListOfTours.length === 0 ? (
                        <TourPageElement
                            TourList={TourStore?.tours}
                            clickHandler={handleOnClick}
                            images={images}
                        />
                    ) : (
                        <TourPageElement
                            TourList={TourStore?.filteredListOfTours}
                            clickHandler={handleOnClick}
                            images={images}
                        />
                    )}
                </div>
            </Container>
        </>
    );
});
