import {
    ADMIN_PATH,
    LOGIN_PATH,
    REGISTRATION_PATH,
    SERVICEP_PATH,
    SERVICES_PATH,
    TOURS_PATH,
    TOUR_PATH,
} from './utils/consts';

import { AuthPage } from './pages/AuthPage';
import { ToursPage } from './pages/ToursPage';
import { Tour } from './components/Tour/Tour';
import { Services } from './components/Service/Services';
import { Login } from './components/Auth/Login';
import { Registration } from './components/Auth/Registration';

/**
 * Routes for authentication
 */
export const authRoutes = [
    {
        path: ADMIN_PATH,
        component: AuthPage,
    },
    {
        path: SERVICEP_PATH,
        component: AuthPage,
    }
];

/**
 * Public routes to see tour agency main pages
 */
export const publicRoutes = [
    {
        path: LOGIN_PATH,
        component: Login,
    },
    {
        path: REGISTRATION_PATH,
        component: Registration,
    },
    {
        path: TOUR_PATH,
        component: Tour,
    },
    {
        path: TOURS_PATH,
        component: ToursPage,
    },
    {
        path: SERVICES_PATH,
        component: Services
    }
];
