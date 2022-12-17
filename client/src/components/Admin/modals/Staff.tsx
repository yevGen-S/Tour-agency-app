import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, Container } from '@mui/material';
import EditableList from '../../EditableList/EditableList';
import { fetchAllUsers } from '../../../http/userApi';
import UserStore from '../../../store/UserStore';
import React from 'react';
import { observer } from 'mobx-react-lite';

export const Staff = observer(() => {
    const [open, setOpen] = useState(false);
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRefresh = () => {
        fetchAllUsers()
            .then((data) => {
                UserStore.setUsers(data);
            })
            .finally(() => setLoading(false));
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row'>
                <div className='pr-10 text-[30px]'>Staff</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Staff manipulations
                </Button>
            </div>

            <Dialog
                open={open}
                scroll='paper'
                onClose={handleClose}
                fullWidth
                maxWidth='lg'
            >
                <DialogTitle> Add/edit/remove staff </DialogTitle>
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
