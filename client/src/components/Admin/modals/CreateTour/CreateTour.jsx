import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Container } from '@mui/material';
import ModalInput from '../../../EditableList/Modal/ModalInput';
import TourStore from '../../../../store/TourStore';
import { SelectBox } from './SelectBox';
import { fetchCities } from '../../../../http/cityApi';
import { observer } from 'mobx-react-lite';
import { createTour } from '../../../../http/tourApi';
import { fetchHotels } from '../../../../http/hotelsApi';

export const CreateTour = observer(() => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchCities()
            .then((data) => {
                console.log(data.rows);
                TourStore.setCities(data.rows);
            })
            .catch((e) => {
                console.log(e);
            });

        fetchHotels()
            .then((data) => {
                console.log(data);
                TourStore.setHotels(data.rows);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeName = (e) => {
        TourStore.newTour.name = e.target.value;
    };
    const handleChangeNumberOfPlaces = (e) => {
        TourStore.newTour.number_of_places = e.target.value;
    };
    const handleChangePeriodStart = (e) => {
        TourStore.newTour.period_start = e.target.value;
    };
    const handleChangePeriodEnd = (e) => {
        TourStore.newTour.period_end = e.target.value;
    };
    const handleChangeCity = (e) => {
        TourStore.newTour.cityId = e.target.value;
    };

    const handleChangeHotel = (e) => {
        TourStore.newTour.hotelId = e.target.value;
    };

    const handleAddTour = async () => {
        try {
            const form = document.getElementById('tourFormId');
            if (!form.checkValidity()) {
                const tmpSubmit = document.createElement('button');
                form.appendChild(tmpSubmit);
                tmpSubmit.click();
                form.removeChild(tmpSubmit);
            } else {
                createTour(
                    TourStore.newTour.name,
                    TourStore.newTour.number_of_places,
                    TourStore.newTour.period_start,
                    TourStore.newTour.period_end,
                    TourStore.newTour.cityId,
                    TourStore.newTour.hotelId
                )
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[25px]'>Create tour</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Create tour
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
                {/* <!-- Modal content --> */}
                <form
                    id='tourFormId'
                    className='relative bg-white rounded-lg shadow dark:bg-gray-700'
                >
                    {/* <!-- Modal header --> */}
                    <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                            Create tour
                        </h3>

                        {CloseButton(handleClose)}
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className='p-6  grid grid-cols-2 gap-5'>
                        <ModalInput
                            inputName={'Tour name'}
                            inputPlaceholder={TourStore.newTour.name}
                            inputType={'text'}
                            isRequired={true}
                            changeInput={handleChangeName}
                        />

                        <ModalInput
                            inputName={'Number of places'}
                            inputPlaceholder={
                                TourStore.newTour.number_of_places
                            }
                            inputType={'number'}
                            isRequired={true}
                            changeInput={handleChangeNumberOfPlaces}
                        />

                        <ModalInput
                            inputName={'period start'}
                            inputPlaceholder={
                                TourStore.newTour.number_of_places
                            }
                            inputType={'date'}
                            isRequired={true}
                            changeInput={handleChangePeriodStart}
                        />

                        <ModalInput
                            inputName={'period end'}
                            inputPlaceholder={
                                TourStore.newTour.number_of_places
                            }
                            inputType={'date'}
                            isRequired={true}
                            changeInput={handleChangePeriodEnd}
                        />

                        <SelectBox
                            label={'City'}
                            items={TourStore?.cities}
                            handler={handleChangeCity}
                        />

                        <SelectBox
                            label={'Hotel'}
                            items={TourStore?.hotels}
                            handler={handleChangeHotel}
                        />
                    </div>
                </form>

                <DialogActions>
                    {/* <!-- Modal footer --> */}
                    <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                        <button
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            onClick={handleAddTour}
                        >
                            ADD TOUR
                        </button>
                        <button
                            type={'button'}
                            onClick={handleClose}
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            Cancel
                        </button>
                    </div>
                </DialogActions>
            </Dialog>
        </Container>
    );
});

const CloseButton = (handleClose) => {
    return (
        <button
            type='button'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-toggle='newUserModal'
            onClick={handleClose}
        >
            <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                ></path>
            </svg>
        </button>
    );
};
