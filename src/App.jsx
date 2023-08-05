import React from 'react';
import { Outlet } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AppLayout from './layouts/AppLayout';

function App() {
    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    );
}

export default App;
