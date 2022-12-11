import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/NavBar';

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
        </BrowserRouter>
    );
};
