import React, { useContext, useState } from 'react';
import { EditableListContext } from '../EditableList';
import ModalInput from './ModalInput';

const ModalTransports = ({ transport, handleClose }) => {
    const [type, setType] = useState(transport.Transport_type);
    const [cityFrom, setCityFrom] = useState(transport.city_from);
    const [cityTo, setCityTo] = useState(transport.city_to);
    const [places, setPlaces] = useState(transport.number_of_places);

    const [price, setPrice] = useState(transport.price);

    const { setListItems, setIsLoading, asyncGetItems } =
        useContext(EditableListContext);

    const handleOnClick = async () => {
        const form = document.getElementById('dura');
        if (!form.checkValidity()) {
            const tmpSubmit = document.createElement('button');
            form.appendChild(tmpSubmit);
            tmpSubmit.click();
            form.removeChild(tmpSubmit);
        } else {
            handleClose();
            // await updateStudent(type, city, price);
            // setIsLoading(true);
            // await asyncGetItems()
            //     .then((data) => {
            //         setListItems(data);
            //     })
            //     .finally(() => setIsLoading(false));
        }
    };

    return (
        <>
            <div className='p-6 space-y-6'>
                <div className='grid grid-cols-6 gap-6'>
                    <ModalInput
                        inputName={'Transport type'}
                        inputPlaceholder={'type'}
                        inputType={'text'}
                        isRequired={true}
                        inputValue={type}
                        onChangeSet={setType}
                    />
                    <ModalInput
                        inputName={'City from'}
                        inputPlaceholder={'city from'}
                        inputType={'text'}
                        isRequired={true}
                        inputValue={cityFrom}
                        onChangeSet={setCityFrom}
                    />
                    <ModalInput
                        inputName={'City to'}
                        inputPlaceholder={'city to'}
                        inputType={'text'}
                        isRequired={true}
                        inputValue={cityTo}
                        onChangeSet={setCityTo}
                    />
                    <ModalInput
                        inputName={'Number of places'}
                        inputPlaceholder={'number of places'}
                        inputType={'text'}
                        isRequired={true}
                        inputValue={places}
                        onChangeSet={setPlaces}
                    />
                    <ModalInput
                        inputName={'Price'}
                        inputPlaceholder={'price'}
                        inputType={'text'}
                        isRequired={true}
                        inputValue={price}
                        onChangeSet={setPrice}
                    />
                </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div
                className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'
                style={{ justifyContent: 'space-between' }}
            >
                {/* <!-- Buttons from config --> */}

                <button
                    type='submit'
                    onClick={handleOnClick}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Save
                </button>
            </div>
        </>
    );
};

export default ModalTransports;
