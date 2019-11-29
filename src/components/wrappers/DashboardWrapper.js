import React from 'react';
import Menu from '../Menu';
import Top from '../Top';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'axios/dist/axios';

const DashboardWrapper = ({ children }) => {
    return (
        <div className="wrapper">
            <Menu />
            <div className="main">
                <Top />
                {children}
            </div>
        </div>
    )
}

export default DashboardWrapper;