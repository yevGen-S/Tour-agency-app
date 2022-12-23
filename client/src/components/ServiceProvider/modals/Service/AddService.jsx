import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';
import { CloseButton } from '../../../Admin/modals/CloseButton';
import EditableList from '../../../UniversalList/EditableList';
import { serviceListConfig } from '../../../UniversalList/ListConfig/ServiceListConfig';

export const AddService = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRefresh = () => {
        // fetchAllUsers().then((data) => {
        //     UserStore.setUsers(data);
        // });
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[25px] text-gray-200'>Service</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Service manipulations
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
                    Add/edit services
                    <CloseButton handleClose={handleClose} />
                </DialogTitle>
                <DialogContent>
                    <EditableList config={serviceListConfig} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleRefresh}>refresh</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
