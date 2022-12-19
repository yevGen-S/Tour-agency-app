import { observer } from 'mobx-react-lite';
import React from 'react';
import TourStore from '../../../../store/TourStore';
import { CheckBoxRow } from './CheckBoxRow';

export const ListOfCheckboxes = observer(({ listName, list }) => {
    /**
     * function to add tour points for tour
     */
    const handleChange = (e, data) => {
        try {
            if (e.target.checked) {
                TourStore.newTourPoints.push(
                    JSON.parse(
                        JSON.stringify({
                            tour_id: TourStore.tourWithTourPoints.id,
                            service_id: e.target.id,
                            date: data.date.value,
                            day: data.day.value,
                            description: data.description.value,
                        })
                    )
                );
            } else {
                const removeIndex = TourStore.newTourPoints.findIndex(
                    (tourPoint) => {
                        if (
                            tourPoint.service_id === e.target.id &&
                            tourPoint.date === data.date.value &&
                            tourPoint.day === data.day.value &&
                            tourPoint.description === data.description.value
                        ) {
                            return true;
                        }
                    }
                );

                TourStore.newTourPoints.pop(removeIndex);
                console.log(TourStore.newTourPoints);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='h-screen'>
            <h1 className='text-[20px] p-5 font-bold'>{listName}</h1>
            <ul className='flex w-full justify-center flex-col text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                {list.map((element) => {
                    return (
                        <CheckBoxRow
                            element={element}
                            handleChange={handleChange}
                        />
                    );
                })}
            </ul>
        </div>
    );
});
