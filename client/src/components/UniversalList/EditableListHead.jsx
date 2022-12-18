import React, { useState } from 'react';
import { studentsListConfig } from './ListConfig/StudentsListConfig';

const EditableListHead = ({ editableListHead }) => {
    return (
        <tr>
            {editableListHead.map((heading) => {
                return (
                    <th scope='col' className='py-3 px-6'>
                        {heading}
                    </th>
                );
            })}
        </tr>
    );
};

export default EditableListHead;
