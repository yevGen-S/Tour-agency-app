import React, { useState } from 'react';

const EditableListHead = () => {
    const [action, isAction] = useState(true);

    return (
        <tr>
            <th scope='col' className='py-3 px-6'>
                Login / email
            </th>
            <th scope='col' className='py-3 px-6'>
                Name
            </th>
            <th scope='col' className='py-3 px-6'>
                Surname
            </th>
            <th scope='col' className='py-3 px-6'>
                Phone number
            </th>
            <th scope='col' className='py-3 px-6'>
                Role
            </th>
            <th scope='col' className='py-3 px-6'>
                Action
            </th>
        </tr>
    );
};

export default EditableListHead;
