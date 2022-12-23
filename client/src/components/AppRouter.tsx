import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToursPage } from '../pages/ToursPage';
import { authRoutes, publicRoutes } from '../routes';

import UserStore from '../store/UserStore';
import { auth } from '../http/userApi';
import { CircularProgress } from '@mui/material';

/**
 * Component represents navigation between different routes
 * @component
 */
export const AppRouter = observer(() => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth()
            .then((data) => {
                if (data) {
                    UserStore.setIsAuth(true);
                    UserStore.setUser(data);
                    console.log(data);
                }
            })
            .catch((e) => {
                console.log('Not authorized');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='flex h-screen w-screen items-center justify-center'>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <Routes>
                {UserStore.isAuth &&
                    authRoutes.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component />}
                            />
                        );
                    })}

                {publicRoutes.map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    );
                })}

                <Route path='*' element={<ToursPage />} />
            </Routes>
        </>
    );
});
