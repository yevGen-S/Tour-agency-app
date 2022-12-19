import { useState } from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';
import EditableList from '../../EditableList/EditableList';
import { fetchAllUsers } from '../../../http/userApi';
import UserStore from '../../../store/UserStore';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { CloseButton } from './CloseButton';

export const Users = observer(() => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRefresh = () => {
        fetchAllUsers().then((data) => {
            UserStore.setUsers(data);
        });
    };
    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[25px] text-gray-200'>Users</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Users manipulations
                </Button>
            </div>

            <Dialog
                open={open}
                scroll='paper'
                onClose={handleClose}
                fullWidth
                maxWidth='lg'
            >
                <DialogTitle className='flex justify-between'>
                    Add/edit/remove staff{' '}
                    <CloseButton handleClose={handleClose} />
                </DialogTitle>
                <DialogContent>
                    <EditableList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleRefresh}>refresh</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
});
