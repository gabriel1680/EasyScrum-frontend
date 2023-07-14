import React from 'react';

import './AppLayout.css';
import { ToastContainer } from 'react-toastify';

function AppLayout({ children }) {
    return (
        <div className='app-container'>
            <ToastContainer autoClose={8000} />
            <header className='app-header'>EasyScrum</header>
            <main className='app-content'>{children}</main>
        </div>
    );
}

export default AppLayout;
