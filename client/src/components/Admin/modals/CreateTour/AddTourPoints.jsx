import {
    Button,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../../../http/serviceApi';
import { createTour, fetchTours } from '../../../../http/tourApi';
import ServiceStore from '../../../../store/ServiceStore';
import TourStore from '../../../../store/TourStore';
import { ListOfCheckboxes } from './ListOfCheckboxes';
import { SelectBox } from './SelectBox';

export const AddTourPoints = observer(() => {
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

        fetchTours().then((data) => {
            TourStore.setTours(data);
        });
    }, []);

    if (isLoading) {
        return <CircularProgress />;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        TourStore.newTourPoints = [];
    };

    const handleAddTourPoints = async (e) => {
        createTour(TourStore.newTourPoints.tour_id).then((data) => {

        })
    };

    const handleChangeTour = (e) => {
        TourStore.tourWithTourPoints = TourStore.tours.filter((tour) => {
            if (tour.id === e.target.value) {
                return tour;
            }
        })[0];

        ServiceStore.filter(TourStore.tourWithTourPoints.City_name);
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[25px]'>Add Tour Points</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open modal tour points
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
                <DialogTitle> Select tour and add tour points</DialogTitle>
                <DialogContent>
                    <div className='m-10'>
                        <SelectBox
                            label={'Tour'}
                            items={TourStore.tours}
                            handler={handleChangeTour}
                        />
                    </div>

                    <div className='flex flex-col space-between'>
                        {ServiceStore.filteredServices.length === 0 ? (
                            <ListOfCheckboxes
                                className='p-5'
                                listName={'Tour points: '}
                                list={ServiceStore.services}
                            />
                        ) : (
                            <ListOfCheckboxes
                                className='p-5'
                                listName={'Tour points: '}
                                list={ServiceStore.filteredServices}
                            />
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Add</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
});
