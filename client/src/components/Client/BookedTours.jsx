import { CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsersTours } from '../../http/tourApi';
import UserStore from '../../store/UserStore';
import { BookedTour } from './BookedTour';
import { CanceledTour } from './CanceledTour';
import { PaidTour } from './PaidTour';
import { v4 as uuid } from 'uuid';

export const BookedTours = observer(() => {
    const { id } = useParams();
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
                                return <BookedTour key={uuid()} tour={tour} />;
                            }
                        )}
                    </div>
                    <div className='w-full h-1 bg-gray-500 my-5' />

                    <div>
                        {UserStore?.filterUserToursByStatus('paid')?.map(
                            (tour) => {
                                return <PaidTour key={uuid()} tour={tour} />;
                            }
                        )}
                    </div>
                    <div className='w-full h-1 bg-gray-500 my-5' />

                    <div>
                        {UserStore?.filterUserToursByStatus('canceled')?.map(
                            (tour) => {
                                return (
                                    <CanceledTour key={uuid()} tour={tour} />
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
