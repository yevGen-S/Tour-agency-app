import { CircularProgress, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    fetchTour,
    fetchTourPoints,
    fetchUsersTours,
} from '../../http/tourApi';
import TourStore from '../../store/TourStore';
import ServiceImages from '../Service/constants';
import { bookTour } from '../../http/userApi';
import UserStore from '../../store/UserStore';
import { ConfirmBooking } from './ConfirmBooking';
import ServiceStore from '../../store/ServiceStore';

const styleTourDescription = `
    text-[20px]
    underlined 
`;

export const Tour = observer(() => {
    const { id } = useParams();

    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchTour(id).then((data) => {
            TourStore.setSelected(data[0]);
        });

        fetchTourPoints(id)
            .then((data) => {
                TourStore.setSelectedTourPoints(data);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    const handleBookTour = async (tranport_id: string) => {
        bookTour(UserStore.user.login, id, tranport_id).then((data) => {
            fetchUsersTours(UserStore.user.login)
                .then((data) => {
                    UserStore.setUsersTours(data.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        });
    };

    const handleOnClick = (serviceId: string, image: string) => {
        ServiceStore.setSelectedServiceImage(image);
        navigate(`/service/${serviceId}`);
    };

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
                            </div>
                        </h3>
                        <button
                            onClick={() => setOpen(true)}
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
                        const image = ServiceImages.getRandImage(
                            service.day,
                            service.Service_type
                        );
                        return (
                            <div key={service.Service_id}>
                                <div className='flex flex-row p-3'>
                                    <img
                                        src={image}
                                        onClick={() =>
                                            handleOnClick(
                                                service.Service_id,
                                                image
                                            )
                                        }
                                        alt='service'
                                        className='max-w-[450px] cursor-pointer'
                                    />
                                    <div className='p-10'>
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
                            </div>
                        );
                    })}
                    <ConfirmBooking
                        isOpen={isOpen}
                        setOpen={setOpen}
                        handleConfirm={handleBookTour}
                    />
                </div>
            </Container>
        </div>
    );
});
