import { Checkbox } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { fetchCities } from '../../../http/cityApi';
import { changeHotel } from '../../../http/hotelsApi';
import { EditableListContext } from '../EditableList';
import ModalInput from './ModalInput';
import { SelectBox } from './SelectBox';

const ModalHotels = ({ hotel, handleClose }) => {
    const [name, setName] = useState(hotel.name);
    const [food, setFood] = useState(hotel.food);
    const [city, setCity] = useState(hotel.city);

    const [cities, setCities] = useState();

    const [price, setPrice] = useState(hotel.price_for_night);

    const { setListItems, setIsLoading, asyncGetItems } =
        useContext(EditableListContext);

    useEffect(() => {
        fetchCities().then((data) => {
            setCities(data.data);
        });
    }, []);

    const handleOnClick = async () => {
        handleClose();
        await changeHotel(name, city, food, price, hotel.id);
        setIsLoading(true);
        await asyncGetItems()
            .then((data) => {
                setListItems(data.data);
            })
            .finally(() => setIsLoading(false));
    };

    const handleOnChange = (e) => {
        setCity(e.target.value);
    };

    const handleSetFood = (e) => {
        setFood(e.target.checked);
    };

    return (
        <>
            <div className='p-6 space-y-6'>
                <div className='grid grid-cols-5 gap-3'>
                    <ModalInput
                        inputName={'hotel name'}
                        inputPlaceholder={'Hotel name'}
                        inputType={'text'}
                        isRequired={true}
                        inputValue={name}
                        onChangeSet={setName}
                    />
                    <div>
                        Food included
                        <Checkbox onClick={handleSetFood} />
                    </div>
                    <SelectBox
                        items={cities}
                        label={'city'}
                        handler={handleOnChange}
                    />
                    <ModalInput
                        inputName={'price'}
                        inputPlaceholder={'price'}
                        inputType={'number'}
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

export default ModalHotels;
