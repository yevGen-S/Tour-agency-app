import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTour, fetchTourPoints } from '../../http/tourApi';
import TourStore from '../../store/TourStore';
import ServiceImages from '../Service/constants';

const styleTourDescription = `
    text-[20px]
`;

export const Tour = observer(() => {
    const { id } = useParams();

    useEffect(() => {
        fetchTour(id).then((data) => {
            TourStore.setSelected(data[0]);
            console.log(data[0]);
        });
        fetchTourPoints(id).then((data) => {
            TourStore.setSelectedTourPoints(data);
            console.log(data);
        });
    }, [id]);

    return (
        <div className='flex justify-center relative h-screen w-screen'>
            <img
                src={TourStore.selectedTourImage}
                alt='Tour'
                className='w-full relative'
            />
            <Container
                maxWidth='md'
                color='#ffff'
                className='items-center justify-center absolute top-[500px] bottom-0'
            >
                <div className='bg-white w-full h-full'>
                    <h1 className='text-bold font-mono text-[45px]'>
                        Tour: {TourStore?.selectedTour?.Tour_name}
                    </h1>
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
                        {' '}
                        Rating {TourStore?.selectedTour?.rating}{' '}
                    </h3>

                    <h3 className={styleTourDescription}>
                        From{' '}
                        {TourStore?.selectedTour?.period_start?.substring(
                            0,
                            10
                        )}{' '}
                        to{' '}
                        {TourStore?.selectedTour?.period_end?.substring(0, 10)}
                    </h3>
                </div>
                <div className='  w-full pt-[100px] columns-1'>
                    <h1 className='text-bold font-mono text-[45px]'>
                        {' '}
                        Tour points
                    </h1>

                    {TourStore?.selectedTourPoints?.map((service: any) => {
                        return (
                            <div className='flex flex-row p-3'>
                                <img
                                    src={ServiceImages.getRandImage(
                                        service.day,
                                        service.Service_type
                                    )}
                                    alt='service'
                                    className='max-w-[500px]'
                                />
                                <div key={service.Service_id} className='p-10'>
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
                        );
                    })}
                </div>
            </Container>
        </div>
    );
});
