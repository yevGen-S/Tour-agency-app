import React, { useEffect, useState } from 'react';
import ActionDropDown from './ActionDropDown';
import EditableListItem from './EditableListItem';
import ModalWindow from './Modal/ModalWindow';
import SearchInput from './SearchInput';
import EditableListHead from './EditableListHead';
import { v4 as uuid } from 'uuid';
import UserStore from '../../store/UserStore';
import { observer } from 'mobx-react-lite';
import { fetchAllUsers } from '../../http/userApi';
import { CircularProgress } from '@mui/material';

const EditableList = observer(() => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllUsers()
            .then((data) => {
                UserStore.setUsers(data);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <CircularProgress />;
    }
    return (
        <>
            <div className='overflow-x-auto relative shadow-md sm:rounded-lg h-screen'>
                <div className='flex justify-between items-center py-4 bg-white '>
                    <ActionDropDown />
                    <SearchInput />
                </div>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 0 dark:text-gray-400'>
                        <EditableListHead />
                    </thead>
                    <tbody>
                        {UserStore.filteredListOfUsers.length === 0
                            ? UserStore?.users.map((user) => {
                                  return (
                                      <EditableListItem
                                          id={user.id}
                                          key={user.id}
                                          setModalOpen={setModalOpen}
                                          user={user}
                                      />
                                  );
                              })
                            : UserStore.filteredListOfUsers.map((user) => {
                                  return (
                                      <EditableListItem
                                          id={user.id}
                                          key={user.id}
                                          setModalOpen={setModalOpen}
                                          user={user}
                                      />
                                  );
                              })}
                    </tbody>
                </table>
            </div>
            <ModalWindow
                id={uuid()}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                modalName={'Edit user'}
            />
        </>
    );
});

export default EditableList;
