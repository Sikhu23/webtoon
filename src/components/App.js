import React from 'react';
import Navbar from './Header/Navbar';
import Body from './Body/Body';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default App;
