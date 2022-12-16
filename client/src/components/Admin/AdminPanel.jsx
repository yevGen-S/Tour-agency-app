import { Container } from '@mui/material';
import React from 'react';
import { Staff } from './modals/Staff';
import { CreateTour } from './modals/CreateTour';
import { ReportOfSells } from './modals/ReportOfSells';

export const AdminPanel = () => {
    return (
        <Container className='flex justify-items-center'>
            <div className='font-bold text-[40px]'> Admin panel </div>
            <Staff />
            <ReportOfSells />
            <CreateTour />
        </Container>
    );
};
