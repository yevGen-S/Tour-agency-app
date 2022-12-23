import React, { useContext, useEffect, useState } from 'react';
import { fetchCities } from '../../../http/cityApi';
import { changeService } from '../../../http/serviceApi';
import ServiceStore from '../../../store/ServiceStore';
import { EditableListContext } from '../EditableList';
import ModalInput from './ModalInput';
import { SelectBox } from './SelectBox';

const ModalServices = ({ service, handleClose }) => {
    const [city, setCity] = useState(service.city);
    const [price, setPrice] = useState(service.price);

    const [cities, setCities] = useState();

    const { setListItems, setIsLoading, asyncGetItems } =
        useContext(EditableListContext);

    useEffect(() => {
        fetchCities().then((data) => {
            console.log(data.data.rows);
            setCities(data.data.rows);
        });
    }, []);

    const handleOnClick = async () => {
        handleClose();
        await changeService(service.id, price, city);
        setIsLoading(true);
        await asyncGetItems()
            .then((data) => {
                setListItems(data.data);
            })
            .finally(() => setIsLoading(false));
    };

    const handleOnChange = (e) => {
        setCity(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <div className='p-6 space-y-6'>
                <div className='grid grid-cols-2 gap-6'>
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

export default ModalServices;
