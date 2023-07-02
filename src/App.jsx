import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
        <div className='app-container'>
            <ToastContainer autoClose={8000} />
            <header className='app-header'>EasyScrum</header>
            <main className='app-content'>
                <Outlet /> 
            </main>
        </div>
    );
}

export default App
