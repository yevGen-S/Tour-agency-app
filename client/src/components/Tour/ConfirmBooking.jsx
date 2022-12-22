import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, Modal } from '@mui/material';
import { SelectBox } from '../Client/SelectBox';
import { SuccessMessage } from '../ActionMessage/SuccessMessage';
import { ErrorMessage } from '../ActionMessage/ErrorMessage';
import { CloseButton } from '../Admin/modals/CloseButton';
import { fetchTransports } from '../../http/transportApi';
import TranportStore from '../../store/TranportStore';
import TourStore from '../../store/TourStore';

export const ConfirmBooking = ({ isOpen, setOpen, handleConfirm }) => {
    const [isSuccess, setIsSuccessMessage] = useState(false);
    const [isError, setIsErrorMessage] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTransports()
            .then((data) => {
                TranportStore.setTranports(data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const handleClose = () => {
        setOpen(false);
        setIsErrorMessage(false);
        setIsSuccessMessage(false);
        setMessage('');
        setTransportId('');
    };

    const [transportId, setTransportId] = useState('');

    const handleBook = async () => {
        setOpen(false);
        if (!!transportId) {
            await handleConfirm(transportId);
        } else {
            await handleConfirm();
        }
    };

    const handleChange = (e) => {
        setTransportId(e.target.value);
    };

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth='lg'>
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

                    <CloseButton handleClose={handleClose} />
                </div>
                {/* <!-- Modal body --> */}
                {isSuccess && <SuccessMessage message={message} />}

                {isError && (
                    <ErrorMessage
                        message={`Tour points are not added: ${message}`}
                    />
                )}

                <h1 className='m-3 text-[15px]'>
                    {' '}
                    Choose transport if you need{' '}
                </h1>

                <div className='p-6 grid grid-cols-1'>
                    <SelectBox
                        label={'Transport'}
                        items={TranportStore.filterByCityTo(
                            TourStore.selectedTour.City_name
                        )}
                        handler={handleChange}
                    />
                </div>
            </form>

            <DialogActions>
                {/* <!-- Modal footer --> */}
                <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                    <button
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        onClick={handleBook}
                    >
                        BOOK TOUR
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
    );
};
