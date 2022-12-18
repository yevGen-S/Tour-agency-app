import { useState } from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';
import { fetchSellsReport } from '../../../http/tourApi';
import TourStore from '../../../store/TourStore';
import { Table } from '../../Table/Table';
import { observer } from 'mobx-react-lite';

const sourcesColumns = ['Tour name', 'Number of sold tours', 'Summary price'];

export const ReportOfSells = observer(() => {
    const [open, setOpen] = useState(false);

    // const [dateFrom, setDateFrom] = useState();
    // const [dateTo, setDateTo] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReportShow = async () => {
        fetchSellsReport().then((data) => {
            TourStore.setSellsReport(data);
        });
    };

    return (
        <Container className='p-2'>
            <div className='flex flex-row '>
                <div className='pr-10 text-[25px]'>Report of sells</div>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open form dialog
                </Button>
            </div>

            <Dialog open={open} onClose={handleClose} fullScreen>
                <div className='flex flex-row'>
                    <Button onClick={handleClose}>Back</Button>
                </div>

                <DialogTitle className='w-full flex justify-center'>
                    Report of sells
                </DialogTitle>

                <DialogContent>
                    <Button
                        onClick={handleReportShow}
                        className='w-full flex justify-center'
                    >
                        Show report
                    </Button>

                    <div className='flex w-full justify-center'>
                        <Table
                            columns={sourcesColumns}
                            cellWidth={'300px'}
                            rows={TourStore?.sellsReport?.map((row: any) => {
                                return [
                                    row.Tour_name,
                                    row.Number_of_bought_tours,
                                    row.Summary_price,
                                ];
                            })}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </Container>
    );
});
