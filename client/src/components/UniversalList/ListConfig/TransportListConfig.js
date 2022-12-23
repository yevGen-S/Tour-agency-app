import { fetchTransports } from '../../../http/transportApi';
import ModalTransports from '../Modal/ModalTransports';

const leftStringIncludesRight = (left, right) => {
    return String(left)
        .toLocaleLowerCase()
        .includes(String(right).toLocaleLowerCase());
};

export const transportListConfig = {
    asyncGetItems: fetchTransports,
    /**
     * columns names
     */
    editableListHead: [
        'Transport_type',
        'price',
        'city_from',
        'city_to',
        'number_of_places',
    ],

    /**
     * row settings
     */
    getListRow: (transport) => {
        return {
            heading: {
                mainText: `${transport.Transport_type || 'неизвестно'}`,
            },
            tableItems: [
                transport.price,
                transport.city_from,
                transport.city_to,
                transport.number_of_places,
            ],
            actionName: 'edit',
        };
    },
    searchConfig: {
        searchBy: (transport, searchInput) => {
            return (
                leftStringIncludesRight(
                    transport.Transport_type,
                    searchInput
                ) ||
                leftStringIncludesRight(transport.price, searchInput) ||
                leftStringIncludesRight(transport.city_from, searchInput) ||
                leftStringIncludesRight(transport.city_to, searchInput) ||
                leftStringIncludesRight(transport.number_of_places, searchInput)
            );
        },
        searchPlaceholder: 'Find transport',
    },
    modal: {
        modalName: 'Edit transport',
        modalContent: (item, handleClose) => (
            <ModalTransports transport={item} handleClose={handleClose} />
        ),
    },
};
