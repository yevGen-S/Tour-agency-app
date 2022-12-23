import { fetchHotels } from '../../../http/hotelsApi';
import ModalHotels from '../Modal/ModalHotels';

const leftStringIncludesRight = (left, right) => {
    return String(left)
        .toLocaleLowerCase()
        .includes(String(right).toLocaleLowerCase());
};

export const hotelListConfig = {
    asyncGetItems: fetchHotels,
    /**
     * columns names
     */
    editableListHead: [
        'Hotel_name',
        'food included',
        'price_for_nignt',
        'city',
    ],

    /**
     * row settings
     */
    getListRow: (hotel) => {
        return {
            heading: {
                mainText: `${hotel.name || 'неизвестно'}`,
            },
            tableItems: [
                !hotel.food ? 0 : 1,
                hotel.price_for_nignt,
                hotel.city,
            ],
            actionName: 'edit',
        };
    },
    searchConfig: {
        searchBy: (hotel, searchInput) => {
            return (
                leftStringIncludesRight(hotel.Transport_type, searchInput) ||
                leftStringIncludesRight(hotel.food, searchInput) ||
                leftStringIncludesRight(hotel.price_for_nignt, searchInput) ||
                leftStringIncludesRight(hotel.city, searchInput)
            );
        },
        searchPlaceholder: 'Find hotel',
    },
    modal: {
        modalName: 'Edit hotel',
        modalContent: (item, handleClose) => (
            <ModalHotels hotel={item} handleClose={handleClose} />
        ),
    },
};
