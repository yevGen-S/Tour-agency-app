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
import { addTourPoints, fetchTours } from '../../../../http/tourApi';
import ServiceStore from '../../../../store/ServiceStore';
import TourStore from '../../../../store/TourStore';

import { SuccessMessage } from '../../../ActionMessage/SuccessMessage';
import { ErrorMessage } from '../../../ActionMessage/ErrorMessage';

import { CloseButton } from '../CloseButton';
import { ListOfCheckboxes } from './ListOfCheckboxes';
import { SelectBox } from './SelectBox';

export const AddTourPoints = observer(() => {
    const [open, setOpen] = useState(false);
    const [isSuccess, setIsSuccessMessage] = useState(false);
    const [isError, setIsErrorMessage] = useState(false);
    const [message, setMessage] = useState('');

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
        setIsSuccessMessage(false);
        setIsErrorMessage(false);
        setMessage('');
    };

    const handleAddTourPoints = async (e) => {
        addTourPoints(TourStore.newTourPoints)
            .then((data) => {
                console.log(data);
                setMessage(data.message);
                setIsSuccessMessage(true);
            })
            .catch((e) => {
                console.log(e);
                setMessage(e);
                setIsErrorMessage(true);
            });
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
                <div className='pr-10 text-[25px] text-gray-200'>
                    Add Tour Points
                </div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open modal tour points
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
                {/* Header */}
                <DialogTitle className='flex justify-between'>
                    {' '}
                    Select tour and add tour points{' '}
                    <CloseButton handleClose={handleClose} />
                </DialogTitle>

                {isSuccess && <SuccessMessage message={message} />}

                {isError && (
                    <ErrorMessage
                        message={`Tour points are not added: ${message}`}
                    />
                )}

                {/* Main body */}
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

                {/* Footer buttons */}
                <DialogActions>
                    <Button onClick={handleAddTourPoints}>Add</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
});
