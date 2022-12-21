import { CircularProgress, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../../http/serviceApi';
import ServiceStore from '../../store/ServiceStore';
import ServiceImages from './constants';

export const Services = observer(() => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchServices()
            .then((data) => {
                ServiceStore.setServices(data.data);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <CircularProgress />;
    }

    const handleOnClick = (serviceId: string, imageSrc: any) => {
        ServiceStore.setSelectedServiceImage(imageSrc);
        navigate(`/service/${serviceId}`);
    };

    return (
        <Container maxWidth='lg' color='cyan'>
            <p className='md:text-[65px] text-[40px] font-mono'>Services</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
                {ServiceStore?.services?.map((service: any, index: number) => {
                    const image = ServiceImages.getRandImage(
                        index,
                        service.Service_type
                    );
                    return (
                        <div
                            key={service.id}
                            className='p-1 m-2 shadow-md  rounded-[20px] hover:shadow-gray-500'
                        >
                            <div className='overflow-hidden'>
                                <img
                                    src={image}
                                    alt='service'
                                    className='cursor-pointer max-w-[300px] max-h-[180px] hover:scale-[1.1] ease-in duration-[150ms]'
                                    onClick={() => {
                                        handleOnClick(service.id, image);
                                    }}
                                />
                            </div>

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
