import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToursPage } from '../pages/ToursPage';
import { authRoutes, publicRoutes } from '../routes';
import UserStore from '../store/UserStore';

/**
 * Component represents navigation between different routes
 * @component
 */
export const AppRouter = observer(() => {
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
