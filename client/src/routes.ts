import {
    ADMIN_PATH,
    LOGIN_PATH,
    REGISTRATION_PATH,
    SERVICEP_PATH,
    SERVICES_PATH,
    TOURS_PATH,
    TOUR_PATH,
    BOOEKD_TOURS_PATH,
    SERVICE_PATH,
} from './utils/consts';

import { ToursPage } from './pages/ToursPage';
import { Tour } from './components/Tour/Tour';
import { Services } from './components/Service/Services';
import { Login } from './components/Auth/Login';
import { Registration } from './components/Auth/Registration';
import { BookedTours } from './components/Client/BookedTours';
import { AdminPanel } from './components/Admin/AdminPanel';
import { ServiceManagement } from './components/ServiceProvider/ServiceManagement';
import { Service } from './components/Service/Service';

/**
 * Routes for authentication
 */
export const authRoutes = [
    {
        path: ADMIN_PATH,
        component: AdminPanel,
    },
    {
        path: SERVICEP_PATH,
        component: ServiceManagement,
    },
    {
        path: BOOEKD_TOURS_PATH,
        component: BookedTours
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
    },
    {
        path: SERVICE_PATH,
        component: Service
    }
];
