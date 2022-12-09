import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToursPage } from '../pages/ToursPage';
import { authRoutes, publicRoutes } from '../routes';

/**
 * Component represents navigation between different routes
 * @component
 */
export const AppRouter = () => {
    const isAuth = true;
    return (
        <>
            <Routes>
                {isAuth &&
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
};
