import { Container } from '@mui/material';
import React from 'react';
import { Staff } from './modals/Staff';
import { CreateTour } from './modals/CreateTour/CreateTour';
import { ReportOfSells } from './modals/ReportOfSells';
import { AddTourPoints } from './modals/CreateTour/AddTourPoints';

export const AdminPanel = () => {
    return (
        <Container>
            <div className='font-bold text-[40px] p-10'>Admin panel</div>

            <Staff />
            <ReportOfSells />
            <CreateTour />
            <AddTourPoints />
        </Container>
    );
};
