import React, { Component } from 'react';
import Menu from '../Menu';
import Top from '../Top';
import Content from '../Content';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

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