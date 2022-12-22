import { Container } from '@mui/material';
import React from 'react';
import { AddHotel } from './modals/Hotel/AddHotel';
import { AddService } from './modals/Service/AddService';
import { AddTransport } from './modals/Transport/AddTransport';

export const ServiceManagement = () => {
    return (
        <div className='w-screnn h-screen bg-slate-800'>
            <Container className='bg-gray-800 h-full rounded-3xl shadow-lg shadow-blue-200'>
                <div className='font-bold text-[40px] p-5 text-gray-200 flex justify-center'>
                    Service Management
                </div>
                <div className='h-1 w-full bg-gray-700  mb-10' />
                <div className='grid grid-cols-2 gap-1'>
                    <AddService />
                    <AddTransport />
                    <AddHotel />
                </div>
            </Container>
        </div>
    );
};
