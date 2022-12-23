import { fetchServices } from '../../../http/serviceApi';
import ModalServices from '../Modal/ModalServices';

const leftStringIncludesRight = (left, right) => {
    return String(left)
        .toLocaleLowerCase()
        .includes(String(right).toLocaleLowerCase());
};

export const serviceListConfig = {
    asyncGetItems: fetchServices,
    /**
     * columns names
     */
    editableListHead: ['Service_type', 'price', 'city'],

    /**
     * row settings
     */
    getListRow: (service) => {
        return {
            heading: {
                mainText: `${service.Service_type || 'неизвестно'}`,
            },
            tableItems: [service.price, service.city],
            actionName: 'edit',
        };
    },
    searchConfig: {
        searchBy: (service, searchInput) => {
            return (
                leftStringIncludesRight(service.Service_type, searchInput) ||
                leftStringIncludesRight(service.price, searchInput) ||
                leftStringIncludesRight(service.city, searchInput)
            );
        },
        searchPlaceholder: 'Find service',
    },
    modal: {
        modalName: 'Edit service',
        modalContent: (item, handleClose) => (
            <ModalServices service={item} handleClose={handleClose} />
        ),
    },
};
