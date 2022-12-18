import { Container } from '@mui/material';
import React from 'react';
import { Staff } from './modals/Staff';
import { CreateTour } from './modals/CreateTour/CreateTour';
import { ReportOfSells } from './modals/ReportOfSells';
import { ChangeTourPoints } from './modals/CreateTour/ChangeTourPoints';

export const AdminPanel = () => {
    return (
        <Container>
            <div className='font-bold text-[40px] p-5'>Admin panel</div>
            <div className='h-1 w-full bg-gray-800  mb-10' />
            <div className='grid grid-cols-2 gap-1'>
                <Staff />
                <ReportOfSells />
                <CreateTour />
                <ChangeTourPoints />
            </div>
        </Container>
    );
};
