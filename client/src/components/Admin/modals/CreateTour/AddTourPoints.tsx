import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';

export const AddTourPoints = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[30px]'>Add tour points</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open modal tour points
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
