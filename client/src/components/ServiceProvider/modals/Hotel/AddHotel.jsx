import React from 'react';
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import { CloseButton } from '../../../Admin/modals/CloseButton';
import { hotelListConfig } from '../../../UniversalList/ListConfig/HotelListConfig';
import EditableList from '../../../UniversalList/EditableList';
import { fetchHotels } from '../../../../http/hotelsApi';

export const AddHotel = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRefresh = () => {
        // fetchHotels().then((data) => {});
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[25px] text-gray-200'>Hotel</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Hotels manipulations
                </Button>
            </div>

            <Dialog
                open={open}
                scroll='paper'
                onClose={handleClose}
                fullWidth
                maxWidth='lg'
            >
                <DialogTitle className='flex justify-between'>
                    Add/edit/remove hotels{' '}
                    <CloseButton handleClose={handleClose} />
                </DialogTitle>
                <DialogContent>
                    <EditableList config={hotelListConfig} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleRefresh}>refresh</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
