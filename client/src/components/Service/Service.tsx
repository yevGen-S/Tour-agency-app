import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchService } from '../../http/serviceApi';
import ServiceStore from '../../store/ServiceStore';
import { CommentsSection } from '../CommentsSection/CommentsSection';

export const Service = observer(() => {
    const { id } = useParams();

    useEffect(() => {
        fetchService(id).then((data) => {
            ServiceStore.setSelected(data[0]);
            console.log(data[0]);
        });
    }, [id]);

    return (
        <Container className='h-screen'>
            <h1 className='w-full flex justify-center font-sans text-[40px] '>
                Service
            </h1>
            <div className='w-full h-1 bg-gray-800 my-10' />
            <div className='w-full flex flex-row'>
                <img
                    src={ServiceStore.selectedServiceImage}
                    alt='chosen service'
                    className='max-w-[600px] mx-10'
                />
                <div className='flex flex-col'>
                    <h1 className='text-[50px] font-extralight text-gray-900'>
                        {' '}
                        Type{' '}
                        <h2 className='text-[20px] text-gray-700'>
                            {ServiceStore?.selectedService?.type}{' '}
                        </h2>
                    </h1>
                    <h1 className='text-[50px] font-extralight  text-gray-900'>
                        {' '}
                        City
                        <h2 className='text-[20px] text-gray-700'>
                            {ServiceStore?.selectedService?.name}{' '}
                        </h2>
                    </h1>
                </div>
            </div>

            <CommentsSection id={id} />
        </Container>
    );
});
