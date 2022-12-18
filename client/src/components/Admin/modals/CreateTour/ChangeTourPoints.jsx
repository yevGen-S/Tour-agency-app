import {
    Button,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../../../http/serviceApi';
import ServiceStore from '../../../../store/ServiceStore';
import TourStore from '../../../../store/TourStore';
import { ListOfCheckboxes } from './ListOfCheckboxes';
import { SelectBox } from './SelectBox';

export const ChangeTourPoints = () => {
    const [open, setOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchServices()
            .then((data) => {
                ServiceStore.setServices(data.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <CircularProgress />;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeCity = (e) => {
        TourStore.newTour.city = e.target.value;
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[25px]'>Change Tour Points</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open modal tour points
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <SelectBox
                        label={'City'}
                        items={TourStore.cities}
                        handler={handleChangeCity}
                    />

                    <ListOfCheckboxes
                        className='p-5'
                        listName={'Tour points: '}
                        list={ServiceStore.services}
                        toggleCheckBox={console.log}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
