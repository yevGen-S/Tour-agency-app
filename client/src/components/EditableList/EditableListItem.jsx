import { observer } from 'mobx-react-lite';
import React from 'react';
import UserStore from '../../store/UserStore';

const EditableListItem = observer(({ setModalOpen, user }) => {
    const handleOpenModal = () => {
        UserStore.setEditableUser(user);
        setModalOpen(true);
    };
    return (
        <tr className='bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
                scope='row'
                className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap'
            >
                <div className='pl-3'>
                    <div className='text-base font-semibold'>
                        {' '}
                        {user.login}{' '}
                    </div>
                    <div className='font-normal text-gray-500'>
                        {user.email}
                    </div>
                </div>
            </th>

            <td className='py-4 px-6'>{user.name}</td>
            <td className='py-4 px-6'>{user.surname}</td>
            <td className='py-4 px-6'>{user.telephone_number}</td>
            <td className='py-4 px-6'>{user.role}</td>

            <td className='py-4 px-6'>
                {/* <!-- Modal toggle --> */}

                <button
                    onClick={handleOpenModal}
                    data-modal-toggle='editUserModal'
                    className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                    Edit
                </button>
            </td>
        </tr>
    );
});

export default EditableListItem;
