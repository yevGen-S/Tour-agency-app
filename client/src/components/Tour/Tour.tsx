import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTour, fetchTourPoints } from '../../http/tourApi';
import TourStore from '../../store/TourStore';

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

    return (
        <Container
            maxWidth='lg'
            color='#e0c0dd'
            className='items-center justify-center h-screen'
        >
            <div className='text-xl'>
                <h1> Tour </h1>
            </div>

            <div className='justify-center items-center'>
                <h1 className='text-bold'>
                    {TourStore?.selectedTour?.Tour_name}
                </h1>
                <h3>Price: {TourStore?.selectedTour?.price}</h3>
                <h3>City: {TourStore?.selectedTour?.City_name}</h3>
                <h3>
                    Number of places: {TourStore?.selectedTour?.number_of_places}
                </h3>
                <h3> Rating {TourStore?.selectedTour?.rating} </h3>
                <h3>
                    From {TourStore?.selectedTour?.period_start.substring(0, 10)}{' '}
                    to {TourStore?.selectedTour?.period_end.substring(0, 10)}
                </h3>
            </div>
        </Container>
    );
});
