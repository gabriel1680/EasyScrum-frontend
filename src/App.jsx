import React from 'react';
import { Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <div className='app-container'>
        <header className='app-header'>EasyScrum</header>
        <main className='app-content'>
            <Outlet /> 
        </main>
    </div>
    );
}

export default App
