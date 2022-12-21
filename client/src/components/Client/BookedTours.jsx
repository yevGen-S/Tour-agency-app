import { CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUsersTours } from '../../http/tourApi';
import TourStore from '../../store/TourStore';
import UserStore from '../../store/UserStore';
import { BookedTour } from './BookedTour';
import { CanceledTour } from './CanceledTour';
import { PaidTour } from './PaidTour';

export const BookedTours = observer(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsersTours(UserStore.user.login)
            .then((data) => {
                UserStore.setUsersTours(data.data);
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className='flex h-screen w-screen items-center justify-center'>
                <CircularProgress />
            </div>
        );
    }

    return (
        <Container maxWidth='lg'>
            <p className='md:text-[65px] text-[40px] font-mono'>My tours </p>
            {UserStore?.usersTours.length > 0 ? (
                <>
                    <div className='w-full h-1 bg-gray-500 my-5' />
                    <div>
                        {UserStore?.filterUserToursByStatus('booked')?.map(
                            (tour) => {
                                return (
                                    <BookedTour
                                        key={tour.tour_id}
                                        tour={tour}
                                    />
                                );
                            }
                        )}
                    </div>
                    <div className='w-full h-1 bg-gray-500 my-5' />

                    <div>
                        {UserStore?.filterUserToursByStatus('paid')?.map(
                            (tour) => {
                                return (
                                    <PaidTour key={tour.tour_id} tour={tour} />
                                );
                            }
                        )}
                    </div>
                    <div className='w-full h-1 bg-gray-500 my-5' />

                    <div>
                        {UserStore?.filterUserToursByStatus('canceled')?.map(
                            (tour) => {
                                return (
                                    <CanceledTour
                                        key={tour.tour_id}
                                        tour={tour}
                                    />
                                );
                            }
                        )}
                    </div>
                </>
            ) : (
                <div className='font-mono text-[20px]'>You have no tours</div>
            )}
        </Container>
    );
});
