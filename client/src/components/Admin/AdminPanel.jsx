import { Container } from '@mui/material';
import React from 'react';
import { Users } from './modals/Users';
import { CreateTour } from './modals/CreateTour/CreateTour';
import { ReportOfSells } from './modals/ReportOfSells';
import { AddTourPoints } from './modals/CreateTour/AddTourPoints';

export const AdminPanel = () => {
    return (
        <div className='w-screnn h-screen bg-slate-800 '>
            <Container className='bg-gray-800 h-full rounded-3xl shadow-2xl shadow-blue-200'>
                {' '}
                <div className='font-bold text-[40px] p-5 text-gray-200 flex justify-center'>
                    Admin panel
                </div>
                <div className='h-1 w-full bg-gray-700  mb-10' />
                <div className='grid grid-cols-2 gap-1'>
                    <Users />
                    <ReportOfSells />
                    <CreateTour />
                    <AddTourPoints />
                </div>
            </Container>
        </div>
    );
};
