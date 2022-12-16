import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { fetchServices } from '../../http/serviceApi';
import ServiceStore from '../../store/ServiceStore';
import ServiceImages from './constants';

export const Services = observer(() => {
    useEffect(() => {
        if (ServiceStore.services.length === 0) {
            fetchServices().then((data) => {
                ServiceStore.setServices(data.data);
            });
        }
    }, []);

    return (
        <Container maxWidth='lg' color='cyan'>
            <p className='md:text-[65px] text-[40px] font-mono'>Services</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
                {ServiceStore?.services?.map((service: any, index: number) => {
                    return (
                        <div key={service.id} className='p-2'>
                            <img
                                src={ServiceImages.getRandImage(
                                    index,
                                    service.Service_type
                                )}
                                alt='service'
                                className=''
                            />
                            <div className='p-1'>
                                <h1 className='text-bold text-[20px] font-sans'>
                                    Type: {service?.Service_type}
                                </h1>
                                <h1 className='text-bold text-[20px] font-sans'>
                                    Price: {service?.price}
                                </h1>
                                <h1 className='text-bold text-[20px] font-sans'>
                                    City: {service?.city}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
});
