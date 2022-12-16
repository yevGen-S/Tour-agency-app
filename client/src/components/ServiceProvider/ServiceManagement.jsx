import { Container } from '@mui/material';
import React from 'react';
import { AddService } from './modals/AddService';
import { AddTransport } from './modals/AddTransport';

export const ServiceManagement = () => {
    return (
        <Container>
            <div>ServiceManagement</div>
            <AddService />
            <AddTransport />
        </Container>
    );
};
