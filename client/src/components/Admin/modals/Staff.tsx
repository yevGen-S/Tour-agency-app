import { useState } from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';
import { UsersList } from './UsersList';

export const Staff = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container className='grid grid-cols-2'>
            <div className='flex flex-row justify-items-center justify-center'>
                <div className='pr-10 text-[30px]'>Staff</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Staff manipulations
                </Button>
            </div>

            <Dialog open={open} scroll='paper' onClose={handleClose} fullWidth maxWidth='lg'>
                <DialogTitle> Add/edit/remove staff </DialogTitle>
                <Button variant='outlined'>List of staff</Button>
                <DialogContent>
                    <UsersList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
