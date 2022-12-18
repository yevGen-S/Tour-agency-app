import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import TourStore from '../../../../store/TourStore';

export const ListOfCheckboxes = observer(({ listName, list }) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');

    const handleDateOnChange = (e) => {
        setDate(e.target.value);
    };
    const handleDescriptionOnChange = (e) => {
        setDescription(e.target.value);
    };
    const handleDayOnChange = (e) => {
        setDay(e.target.value);
    };

    const handleChange = (e) => {
        if (e.target.checked) {
            TourStore.newTourPoints.push({
                tour_id: TourStore.tourWithTourPoints.id,
                service_id: e.target.id,
                date: date,
                day: day,
                description: description,
            });
        } else {
            const removeIndex = TourStore.newTourPoints.findIndex(
                (tourPoint) => {
                    if (
                        tourPoint.service_id === e.target.id &&
                        tourPoint.date === date &&
                        tourPoint.day === day &&
                        tourPoint.description === description
                    ) {
                        return true;
                    }
                }
            );

            TourStore.newTourPoints.pop(removeIndex);
        }
    };

    return (
        <div className='h-screen'>
            <h1 className='text-[20px] p-5 font-bold'>{listName}</h1>
            <ul className='flex w-full justify-center flex-col text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                {list.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className='w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600'
                        >
                            <div className='flex items-center p-3 ml-10 rind hover:rind-blue-700 hover:shadow-blue-500'>
                                <input
                                    id={element.id}
                                    type='checkbox'
                                    value={'value'}
                                    className='p-0 m-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                                    style={{ transform: 'scale(2)' }}
                                    onChange={handleChange}
                                />
                                <label className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
                                    {element.Service_type}, {element.city},{' '}
                                    {element.price}
                                </label>

                                <div className='flex flex-row'>
                                    <div className='flex flex-col items-center'>
                                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                            Date
                                        </label>
                                        <input
                                            type='date'
                                            id='descr'
                                            className='w-auto h-[60px] mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='date'
                                            required
                                            onChange={handleDateOnChange}
                                        />
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                            Description
                                        </label>
                                        <input
                                            type='text'
                                            id='descr'
                                            className='w-[350px] h-[60px] mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='description'
                                            required
                                            onChange={handleDescriptionOnChange}
                                        />
                                    </div>

                                    <div className='flex flex-col  items-center'>
                                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                            Day
                                        </label>

                                        <input
                                            type='number'
                                            id={`numberday-${element.id}}`}
                                            className='w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='day'
                                            required
                                            onChange={handleDayOnChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});
